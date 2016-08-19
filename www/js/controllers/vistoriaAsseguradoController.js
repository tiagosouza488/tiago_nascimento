//Etapa 01
globalCtrl.controller('vistoriaAssegurado01Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Parametros da tela
  $scope.pergunta = "Houve tempestades com fortes ventos ou granizo na ocasião do sinistro no local afetado?";
  $scope.proximoCtrl = "menu.vistoriaAssegurado02";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "13.01";
  $scope.showExtra = false;
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado01Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado01Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado01Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado01Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go("menu.vistoriaAssegurado04", {sinistroId: $stateParams.sinistroId} );
  }
})

//Etapa 02
globalCtrl.controller('vistoriaAssegurado02Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Parametros da tela
  $scope.pergunta = "A tempestade ocasionou danos generalizados em diversos outros imóveis da cidade?";
  $scope.proximoCtrl = "menu.vistoriaAssegurado03";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "13.02";
  $scope.showExtra = false;
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado02Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado02Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado02Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado02Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go("menu.vistoriaAssegurado04", {sinistroId: $stateParams.sinistroId} );
  }
})

//Etapa 03
globalCtrl.controller('vistoriaAssegurado03Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Parametros da tela
  $scope.pergunta = "Foi amplamente divulgado na imprensa local?";
  $scope.proximoCtrl = "menu.vistoriaAssegurado04";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "13.03";
  $scope.showExtra = false;
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado03Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado03Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado03Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado03Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
})

//Etapa 04
globalCtrl.controller('vistoriaAssegurado04Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Parametros da tela
  $scope.pergunta = "Foram efetuados algum tipo de reparo  após o sinistro ? ";
  $scope.proximoCtrl = "menu.vistoriaAssegurado05";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "13.04";
  $scope.showExtra = false;
  $scope.textLabel = "Especifique:";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado04CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaAssegurado04CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado04Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado04Ctrl == "SIM" ){
    $scope.showExtra = true;
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    $scope.showExtra = true;
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado04Ctrl = "SIM";
    DBManager.saveVistorias();
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.showExtra = false;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado04Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado04CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 05
globalCtrl.controller('vistoriaAssegurado05Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Parametros da tela
  $scope.pergunta = "Existe seguro em outra Companhia Seguradora cobrindo os mesmos bens ora reclamados?";
  $scope.proximoCtrl = "menu.vistoriaAssegurado06";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "13.05";
  $scope.showExtra = false;
  $scope.textLabel = "Especifique:";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado05CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaAssegurado05CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado05Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado05Ctrl == "SIM" ){
    $scope.showExtra = true;
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    $scope.showExtra = true;
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado05Ctrl = "SIM";
    DBManager.saveVistorias();
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.showExtra = false;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado05Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado05CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 06
globalCtrl.controller('vistoriaAssegurado06Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Parametros da tela
  $scope.pergunta = "O segurado autoriza o credito em conta da indenização que tiver direito pela apólice? ";
  //Decide quem vai ser o proximo:
  //Verifica se houve danos no telhado
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa20Ctrl == "SIM" ){
    $scope.proximoCtrl = "menu.vistoriaRegistrarFoto01";
  //Verifica se houve danos no exterior do predio
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa23Ctrl == "SIM" ){
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
  $scope.step = "13.06";
  $scope.showExtra = false;
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado06Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaAssegurado06Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado06Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado06Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaAssegurado06CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

