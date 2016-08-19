//Etapa 25
globalCtrl.controller('vistoriaAtaCtrl', function($scope, $ionicHistory, $stateParams, $state, $ionicSideMenuDelegate, FileManager, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Tem que ler o json e exibir o resumo 
  //TODO: As perguntas que estão espalhadas deveriam estar em im lugar único???

});

//Etapa 26
globalCtrl.controller('vistoriaAssinaturaCtrl', function($scope, $ionicHistory, $stateParams, $state, $ionicSideMenuDelegate, FileManager, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  $scope.pictureList = [];

  //Parametros da tela
  $scope.cursorIndex = $stateParams.sinistroId;
  $ionicSideMenuDelegate.canDragContent(false);
  
  $(document).ready(function() {
    $("#signature1").jSignature({'height': '100%', 'width': '100%'})
  });

  $scope.actionClear = function(){
    $("#signature1").jSignature("reset");
  }

  $scope.actionSave = function(){
    imgName = "sin"+$stateParams.sinistroId+"_step26_pic1.png";
    var res = $("#signature1").jSignature("getData");
    //cria o arquivo da foto 
    FileManager.write_file(Database.path,imgName,res.split(",")[1],function(evt,fileEntry){
      $scope.pictureList.push({"name": imgName, "id": 1, "toShow": res,"path":fileEntry.toURL()});
      Database.vistorias[Database.currentVistoria].vistoriaAssinaturaCtrlPictures = $scope.pictureList;
      Database.vistorias[Database.currentVistoria].vistoriaAssinaturaCtrl = "OK";
      DBManager.saveVistorias();
    },function(err){ console.log("Erro criar file no step "+step); console.log(err) } );
  }

})

//Etapa 27
globalCtrl.controller('vistoriaFinalizacaoCtrl', function($scope, $ionicHistory, $stateParams, $state, $ionicSideMenuDelegate, FileManager, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
 
  //TODO: marcar a visotoria como OK e fazer alguma coisa pra remover a vistoria da lista de agendamentos

});
