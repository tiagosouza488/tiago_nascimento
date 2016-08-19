globalCtrl.controller('realizarVistoriasCtrl', function($scope, $http, $cordovaGeolocation, $interval, $ionicPlatform, $ionicHistory, DBManager, Database) {

  $ionicHistory.nextViewOptions({
	   disableBack: true
  });
  $ionicHistory.clearCache();
  $ionicHistory.clearHistory();
  $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });

  //pega registros salvos se existir já carrega antes
  $scope.listaAgendamentos = Database.sinistros;

  //Faz a chamada do serviço e coloca o resultado no scope do template
  var link = SERVER_ADDR+'agendamentos/vistoriador/'+Database.settings.userid;
  $http.get(link)
    .success(function(data, status, headers, config) {
      //Garante que o painel de mensagens de erros está escondido
      $scope.mostrarMensagemErro = false;
      //Passa a lista direto pro template montar a exibição
      $scope.listaAgendamentos = data;
      //Atualiza a lista de sinistros local
      Database.sinistros = data;
      DBManager.saveSinistros();
    })
    .error(function(data, status, headers, config) {
  	  //Se não conseguiu buscar e o database esta vazio exibe o erro
  	  if( Database.sinistros == null ){
  		//Mostra o painel de erros
  		$scope.mostrarMensagemErro = true;
  		//Exibe a mensagem
  		$scope.mensagemErro = "Não foi possivel listar sinistros. Verifique sua conexão com a internet!";
	  }
  });

  //////////////////////////////////
  // GPS
  //////////////////////////////////
  //Carrega as coordenadas de GPS pela primeira vez ao entrar na tela
  var geoOptionsFirst = { timeout : 15000, enableHighAccuracy: true }
  $cordovaGeolocation.getCurrentPosition(geoOptionsFirst).then(updateCoordenadas, onHttpError);

  //atualiza a posicao caso tenha mudado
  var geoOptionsWatch = { timeout : 3000, enableHighAccuracy: false };
  var gpsWatchID = $cordovaGeolocation.watchPosition(geoOptionsWatch).then(updateCoordenadas, onHttpError);

  //Cria a funcao que atualiza a localizacao geografica na lista de vistorias agendadas
  updateKm = function(){
    //console.log("lat: "+LOCAL_LATITUDE+", long: "+LOCAL_LONGITUDE);
    if( LOCAL_LATITUDE != 0 &&  LOCAL_LONGITUDE != 0 && GPS_CHANGE == true){
      //Atualiza todas as posiçoes
      angular.forEach($scope.listaAgendamentos, function(agendamento, key) {
        var endereco = agendamento.sinistro.rua+", "+agendamento.sinistro.numero+" - "+agendamento.sinistro.bairro+", "+agendamento.sinistro.cidade;
        endereco = endereco.replace(/ /gi, "%20");  // "/ /gi" é pra substituir todos os espaços. Ex: /a/gi remove todos 'a'.
        var url_busca = GOOGLE_API+"/json?origins="+endereco+"&destinations="+LOCAL_LATITUDE+"%20"+LOCAL_LONGITUDE+"&mode=bicycling&language=pt-BR";
        //dbg("realizarVistoriasCtrl")(key+" ("+url_busca+")");
        //Chama API do goole
        $http.get(url_busca).success(function(data, status, headers, config) {
          if( data.rows[0].elements[0].status == "OK" ){
            agendamento.sinistro.mostrarDistancia = true;
            agendamento.sinistro.distancia = data.rows[0].elements[0].distance.text;
          }else{
            agendamento.sinistro.mostrarDistancia = false;
            agendamento.sinistro.distancia = " Impossível calcular ";
          }
        }).error(onHttpError);
      });
      //Depois de processar a mudanca no gps marca como false esperando a proxima modificao
      GPS_CHANGE = false;
    }
    /* Existe um problema em que a funcao updateKm é chamada antes da lista estar pronta
    em função disso não é possivel atualizar os valores, por isso existe este controle
    o objetivo é que ele espere um segundo antes de rodar a primeira vez e depois espere
    60 segundos entre cada execução */
    if( isFirst != null ){
      //Depois de rodar a primeira vez cancela a execução a cada segundo
      $interval.cancel(isFirst);
      //E em seguida agenda uma nova execução a cada 5 segundos
      $interval(updateKm, 5000); //milisegundos
      //Mantem nulo para nao instancia mais um timer
      isFirst = null;
    }
  }

  //Variavel para controlar a primeira execucao do loop de update da lista de vistorias
  var isFirst = null;

  //Repete pra rodar a cada minuto pra atualizar a posiçao
  isFirst = $interval(updateKm, 1000); //milisegundos



})
