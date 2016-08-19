//Detalhes da vistoria
globalCtrl.controller('vistoriaItensReclamadosCtrl', function($scope, $ionicHistory, $stateParams, $state, $ionicModal, $ionicListDelegate, DBManager, Database) {
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Variaveis de apresentação
  $scope.mensagem = "Faça um descritivo de todos os itens reclamados pelo segurado:";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "14.28";
  $scope.itemList = [];
  $scope.index = -1;
  $scope.proximoCtrl = "menu.vistoriaAssegurado01";
  //Se tiver dados lê
  if( Database.vistorias[Database.currentVistoria].vistoriaItensReclamadosCtrl != undefined ){
    $scope.itemList = Database.vistorias[Database.currentVistoria].vistoriaItensReclamadosCtrl;
  }
  //Ação de salvar
  $scope.save = function(newItem){
    //Se o index for menor que zero é por que está criando um novo
    if( $scope.index < 0 ){
      newItem.hasPicture = false;
      newItem.pictureList = [];
      $scope.itemList.push(newItem);
    //Caso contrário está editando
    }else{
      //Edita na lista
      $scope.itemList[$scope.index].qtd = newItem.qtd;
      $scope.itemList[$scope.index].descricao = newItem.descricao;
      //Limpa pra proxima
      $scope.index = -1;
    }
    $scope.modal.hide();
  }
  //Ação de editar
  $scope.edit = function(index){
    $ionicListDelegate.closeOptionButtons();
    $scope.index = index;
    $scope.modal.show();
  }
  //Ação remover 
  $scope.remove = function(itemId){
    $ionicListDelegate.closeOptionButtons();
    $scope.itemList.splice(itemId,1);
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaItensReclamadosCtrl = $scope.itemList;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
  //Desenha o modal quando chamado
  $ionicModal.fromTemplateUrl('addItemModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
  }).then(function(modal) {
      $scope.modal = modal;
  });
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.shown', function() {
    // Execute action
    if( $scope.index < 0 ){
      $scope.newItem = {};
    }else{
      //console.log($scope.itemList);
      $scope.newItem = $scope.itemList[$scope.index];
    }
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
    $scope.index = -1;
  });	

})