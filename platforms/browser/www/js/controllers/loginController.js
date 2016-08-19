globalCtrl.controller('loginCtrl', function($scope, $location, $http, $state, $ionicHistory, DBManager, Database) {

  $ionicHistory.nextViewOptions({
	   disableBack: true
  });

  $scope.logar = function (login) {
    var link = SERVER_ADDR+'vistoriadores/'+login.usuario+'/'+login.senha;
    //limparAvisos();

    if (login == null || login.usuario == null || login.usuario === "") {
      $scope.mensagem = "Usuário inválido!";
      $scope.avisoUsuario = estiloErro;
    }else if( login === null  || login.senha === null || login.senha === ""){
      $scope.mensagem = "Senha inválida!";
      $scope.avisoSenha = estiloErro;
    }else{
      $http.post(link).success(function(data, status, headers, config) {
          if( data != null && data.result != "ERROR" ){
            //limparCampos();
            Database.settings.loginSuccess=true;
            Database.settings.userid = data.id;
            DBManager.saveSettings();
            //Se nao viu a ajuda manda pra tela de ajuda
            if (Database.settings.helpView == false) {
              $state.go('menu.ajuda');
            }else{
              $state.go('menu.realizarVistorias');
            }
          }else{
            alert("Usuário ou senha inválidos");
          }
        }).error(function(data, status, headers, config){
          alert("Impossível autenticar. Falha de conexão com o serviço!");
        });
    }
  };

})
