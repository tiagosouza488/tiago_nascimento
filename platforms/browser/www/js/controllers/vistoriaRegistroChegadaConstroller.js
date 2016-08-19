globalCtrl.controller('vistoriaRegistroChegada01Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Chegando no logradouro do segurado, tire uma foto da placa da rua. Caso não haja tire uma foto da rua onde apareça o imovél do segurado"
  $scope.proximoCtrl = "menu.vistoriaRegistroChegada02";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "08";
  $scope.showExtra = false;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada01Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada01CtrlPictures;
    $scope.showExtra = true;
  }else{
    $scope.pictureList = [];
  }

  //Botao tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada01CtrlPictures = $scope.pictureList;
        Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada01Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
      });
    });
  }
  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

})

globalCtrl.controller('vistoriaRegistroChegada02Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Chegou no em frente à residência do Segurado? Tire foto da fachada da residência/Empresa e tire foto da numeração"
  $scope.proximoCtrl = "menu.vistoriaRegistroChegada03";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "09";
  $scope.showExtra = false;
  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada02Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada02CtrlPictures;
    $scope.showExtra = true;
  }else{
    $scope.pictureList = [];
  }

  //Botao tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada02CtrlPictures = $scope.pictureList;
        Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada02Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
      });
    });
  }
  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
});

globalCtrl.controller('vistoriaRegistroChegada03Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Olhe para a vizinhança. Houve danos em vizinhos?"
  $scope.proximoCtrl = "menu.vistoriaRegistroChegada04";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "10";
  $scope.showExtra = false;
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03Ctrl == "NAO" ){
    $scope.showExtra = true;
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Ação Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go("menu.vistoriaRegistroChegada03Ft", {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Ação próximo
  $scope.actionNext = function(){
    Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
});

globalCtrl.controller('vistoriaRegistroChegada03FtCtrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire fotos dos vizinhos que também sofreram danos"
  $scope.proximoCtrl = "menu.vistoriaRegistroChegada04";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "10.1";
  $scope.showExtra = false;
  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03Ctrl == "SIM" && Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03CtrlPictures != null ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03CtrlPictures;
    $scope.showExtra = true;
  }else{
    $scope.pictureList = [];
  }

  //Botao tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03CtrlPictures = $scope.pictureList;
        Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada03Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
      });
    });
  }
  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
});

globalCtrl.controller('vistoriaRegistroChegada04Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Entre na residência do segurado e seja recebido pelo mesmo! Foi o segurado que o recebeu?"
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa01";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "11";
  $scope.showExtra = false;
  $scope.textLabel = "Quem o recebeu? Qual a relação com o segurado?";
  $scope.observacao = "Peça a ele que faça um breve relato do que aconteceu e lhe mostre os danos";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada04CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada04CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada04Ctrl == "NAO" ){
    $scope.showExtra = true;
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada04Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Ação Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    $scope.showExtra = false;
    Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada04Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.showExtra = true;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada04Ctrl = "NAO";
    DBManager.saveVistorias();
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaRegistroChegada04CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
});

globalCtrl.controller('verFotoCtrl', function($scope, $cordovaFileTransfer, $cordovaFile, $ionicHistory, $stateParams) {

  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
     disableBack: false
  });

  //Le o path da foto
  $scope.toShow = $stateParams.picture;
  $scope.picId = $stateParams.picId;

});
