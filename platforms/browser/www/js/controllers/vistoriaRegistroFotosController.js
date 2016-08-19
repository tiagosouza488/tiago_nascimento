globalCtrl.controller('vistoriaRegistroFotos01Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire fotos do telhado que foi danificado"
  //Verifica se houve danos no exterior do predio
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa23Ctrl == "SIM" ){
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto02";
  //Verifica se houve entupimento da calha
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa24Ctrl == "SIM" ){
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto03";
  //Verifica se houve danos no interior
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa25Ctrl == "SIM" ){
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto04";
  //Se nao teve nada pula direto para tela de coleta de fotos dos itens danificados
  }else{
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto05";
  }
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "14.01";
  $scope.showExtra = false;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos01Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos01CtrlPictures;
    $scope.showExtra = true;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos01CtrlPictures = $scope.pictureList;
        DBManager.saveVistorias();
      });
    });
    //Registra que este passo está OK
    Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos01Ctrl = "OK";
    DBManager.saveVistorias();
    //Depois da foto exibe a lista de fotos e aparece a opção proximo
    $scope.showExtra = true;
  }
})

globalCtrl.controller('vistoriaRegistroFotos02Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire fotos dos danos no exterior do local segurado"
  //Verifica se houve entupimento da calha
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa24Ctrl == "SIM" ){
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto03";
  //Verifica se houve danos no interior
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa25Ctrl == "SIM" ){
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto04";
  //Se nao teve nada pula direto para tela de coleta de fotos dos itens danificados
  }else{
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto05";
  }
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "14.02";
  $scope.showExtra = false;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos02Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos02CtrlPictures;
    $scope.showExtra = true;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos02CtrlPictures = $scope.pictureList;
        DBManager.saveVistorias();
      });
    });
    //Registra que este passo está OK
    Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos02Ctrl = "OK";
    DBManager.saveVistorias();
    //Depois da foto exibe a lista de fotos e aparece a opção proximo
    $scope.showExtra = true;
  }
})

globalCtrl.controller('vistoriaRegistroFotos03Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire fotos da calha entupida"
  //Verifica se houve danos no interior
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa25Ctrl == "SIM" ){
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto04";
  //Se nao teve nada pula direto para tela de coleta de fotos dos itens danificados
  }else{
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto05";
  }
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "14.03";
  $scope.showExtra = false;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos03Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos03CtrlPictures;
    $scope.showExtra = true;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos03CtrlPictures = $scope.pictureList;
        DBManager.saveVistorias();
      });
    });
    //Registra que este passo está OK
    Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos03Ctrl = "OK";
    DBManager.saveVistorias();
    //Depois da foto exibe a lista de fotos e aparece a opção proximo
    $scope.showExtra = true;
  }
})

globalCtrl.controller('vistoriaRegistroFotos04Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire fotos dos danos no interior do prédio"
  $scope.proximoCtrl = "menu.vistoriaRegistrarFoto05";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "14.04";
  $scope.showExtra = false;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos04Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos04CtrlPictures;
    $scope.showExtra = true;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos04CtrlPictures = $scope.pictureList;
        DBManager.saveVistorias();
      });
    });
    //Registra que este passo está OK
    Database.vistorias[Database.currentVistoria].vistoriaRegistroFotos04Ctrl = "OK";
    DBManager.saveVistorias();
    //Depois da foto exibe a lista de fotos e aparece a opção proximo
    $scope.showExtra = true;
  }
})

globalCtrl.controller('vistoriaRegistroFotos05Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.mensagem = "Tire fotos cada um dos item danificado listados abaixo"
  $scope.proximoCtrl = "menu.vistoriaDespesas";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "14.05";
  $scope.itemList = [];
  $scope.index = -1;
  //Se tiver dados lê
  if( Database.vistorias[Database.currentVistoria].vistoriaItensReclamadosCtrl != undefined ){
    $scope.itemList = Database.vistorias[Database.currentVistoria].vistoriaItensReclamadosCtrl;
  }

  //Ação próximo
  $scope.actionNext = function(){
    hasAllPictures = true;
    //Passa por toda a lista se tiver algum faltando foto nao deixa avancar
    for( var it=0; it < $scope.itemList.length; it++ ){
      if( ! $scope.itemList[it].hasPicture ){
        hasAllPictures = false;
      }
    }
    if( hasAllPictures ){
      $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
    }
  }
  //Acao click no item
  $scope.actionTakePicture = function(item){
    $state.go("menu.vistoriaRegistrarFoto05Ft", {"sinistroId": $stateParams.sinistroId, "item": item});
  }
})

globalCtrl.controller('vistoriaRegistroFotos05FtCtrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.mensagem = "Tire fotos cada um dos item danificado listados abaixo"
  $scope.proximoCtrl = "menu.vistoriaRegistrarFoto05";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "14-05";
  $scope.showExtra = false;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaItensReclamadosCtrl[$stateParams.item].hasPicture ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaItensReclamadosCtrl[$stateParams.item].pictureList;
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
        Database.vistorias[Database.currentVistoria].vistoriaItensReclamadosCtrl[$stateParams.item].pictureList = $scope.pictureList;
        Database.vistorias[Database.currentVistoria].vistoriaItensReclamadosCtrl[$stateParams.item].hasPicture = true;
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

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})