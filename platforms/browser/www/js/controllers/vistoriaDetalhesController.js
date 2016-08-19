//Detalhes da vistoria
globalCtrl.controller('vistoriaDetalhesCtrl', function($scope, $ionicHistory, $stateParams, $state, DBManager, Database) {
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  $scope.cursorIndex = $stateParams.sinistroId;

  //Limpa a variavel de controle da vistoria corrente
  Database.currentVistoria = null;

  //Verifica se existe algum registro de vistoria gravado
  if( Database.vistorias != null && Database.vistorias.length > 0 ){
    //Se houver algum registro passa por todos procurando por este
    for(var i in Database.vistorias){
         if( Database.vistorias[i].sinistroId == $scope.sinistro.id ){
           Database.currentVistoria = i;
           console.log("vistoria["+$scope.sinistro+"]index["+Database.currentVistoria+"]load");
         }
    }
  }

  if( Database.currentVistoria == null ){
    if( Database.vistorias != null ){
      Database.currentVistoria = Database.vistorias.length;
    }else{
      Database.currentVistoria = 0;
      Database.vistorias = [];
    }
    Database.vistorias[Database.currentVistoria] =
      {
        "sinistroId": $scope.sinistro.id,
        "status": "NOK",
        "vistoriaRegistroChegada01Ctrl": "NOK",
        "vistoriaRegistroChegada01CtrlPictures": []
      };
    DBManager.saveVistorias();
    console.log("vistoria["+$scope.sinistro+"]index["+Database.currentVistoria+"]save["+Database.currentVistoria+"]");
  }

  //Ação próximo
  $scope.actionNext = function(sinistroId){
    //$state.go("menu.vistoriaRegistroChegada01", {sinistroId: sinistroId});
    $state.go("menu.vistoriaAta", {sinistroId: sinistroId});
  }

})
