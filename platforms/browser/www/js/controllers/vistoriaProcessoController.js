//Execucao do processo de vistoria
//Etapa 01
globalCtrl.controller('vistoriaProcessoEtapa01Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "O local onde ocorreu o sinistro corresponde ao local do risco identificado na apólice?\n\n"+
  $scope.sinistro.cidade+" - "+
  $scope.sinistro.bairro+", "+$scope.sinistro.cep+" - "+
  $scope.sinistro.rua+", "+$scope.sinistro.numero;
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa02";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "01";
  $scope.showExtra = false;
  $scope.textLabel = "Digite o endereço onde ocorreu o sinistro:";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa01CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa01CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa01Ctrl == "NAO" ){
    $scope.showExtra = true;
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa01Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    $scope.showExtra = false;
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa01Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.showExtra = true;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa01Ctrl = "NAO";
    DBManager.saveVistorias();
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa01CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 02
globalCtrl.controller('vistoriaProcessoEtapa02Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Parametros da tela
  $scope.pergunta = "O local vistoriado é a residência habitual do segurado?";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa03";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "02";
  $scope.showExtra = false;
  $scope.textLabel = "Justifique:";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa02CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa02CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa02Ctrl == "NAO" ){
    $scope.showExtra = true;
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa02Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    $scope.showExtra = false;
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa02Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.showExtra = true;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa02Ctrl = "NAO";
    DBManager.saveVistorias();
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa02CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 03
globalCtrl.controller('vistoriaProcessoEtapa03Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Qual o ramo de atividade (Ex: 'Industria textil, Escritorio de Contabilidade')";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa03B";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "03";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03Ctrl != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03Ctrl = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 03B
globalCtrl.controller('vistoriaProcessoEtapa03BCtrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Existem vestígios visuais inequívocos que permitem a caracterização do evento como sinistro amparado pelas coberturas da apólice?";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa04";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "03B";
  $scope.showExtra = false;
  $scope.textLabel = "Justifique:";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03BCtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03BCtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03BCtrl == "NAO" ){
    $scope.showExtra = true;
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03BCtrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    $scope.showExtra = false;
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03BCtrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Ação Não
  $scope.actionNo = function (){
    $scope.showExtra = true;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03BCtrl = "NAO";
    DBManager.saveVistorias();
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa03BCtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 04
globalCtrl.controller('vistoriaProcessoEtapa04Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Imóvel encontra-se em reconstrução ou reforma?";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa05";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "04";
  $scope.showExtra = false;
  $scope.textLabel = "Explique:";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa04CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa04CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa04Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa04Ctrl == "SIM" ){
    $scope.showExtra = true;
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.showExtra = true;
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa04Ctrl = "SIM";
    DBManager.saveVistorias();
  }
  //Ação Não
  $scope.actionNo = function (){
    $scope.showExtra = false;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa04Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa04CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 05
globalCtrl.controller('vistoriaProcessoEtapa05Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Existe alguma atividade comercial na residência?";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa06";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "05";
  $scope.showExtra = false;
  $scope.textLabel = "Especifique:";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa05CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa05CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa05Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else{
    $scope.showExtra = true;
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.showExtra = true;
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa05Ctrl = "SIM";
    DBManager.saveVistorias();
  }
  //Ação Não
  $scope.actionNo = function (){
    $scope.showExtra = false;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa05Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa05CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 06
globalCtrl.controller('vistoriaProcessoEtapa06Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Existe algum sistema de proteção no imóvel ou no(s) equipamento(s) sinistrado(s) que deveriam evitar o sinitro?";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa07";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "06";
  $scope.showExtra = false;
  $scope.textLabel = "Justifique:";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa06CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa06CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa06Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa06Ctrl == "SIM" ){
    $scope.showExtra = true;
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.showExtra = true;
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa06Ctrl = "SIM";
    DBManager.saveVistorias();
  }
  //Ação Não
  $scope.actionNo = function (){
    $scope.showExtra = false;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa06Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa06CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 07
globalCtrl.controller('vistoriaProcessoEtapa07Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Marque o tipo de material da construção do local";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa08";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "07";
  $scope.opcoesCombobox = [ {item: "Alvenaria"}, {item: "Madeira"}, {item: "Misto"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa07Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa07Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa07Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 08
globalCtrl.controller('vistoriaProcessoEtapa08Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Marque o número de pavimentos do local do risco";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa09";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "08";
  $scope.opcoesCombobox = [ {item: "1"}, {item: "2"}, {item: "3"}, {item: "4"}, {item: "5"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa08Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa08Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa08Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 09
globalCtrl.controller('vistoriaProcessoEtapa09Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Informe a área aproximada do local (em m2)";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa10";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "09";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa09Ctrl != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa09Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa09Ctrl = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 10
globalCtrl.controller('vistoriaProcessoEtapa10Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Marque o tipo de telhado";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa11";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "10";
  $scope.opcoesCombobox = [ {item: "Fibrocimento (Brasilit) 4mm"}, {item: "Fibrocimento (Brasilit) 6mm"}, {item: "Fibrocimento (Brasilit) 8mm"}, {item: "Telha de Barro"}, {item: "Telha Concreto"}, {item: "Misto"}, {item: "Outro"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa10Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa10Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa10Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 11
globalCtrl.controller('vistoriaProcessoEtapa11Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Marque o revestimento externo";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa12";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "11";
  $scope.opcoesCombobox = [ {item: "Tijolo à vista"}, {item: "Emboço/Chapisco (áspero)"}, {item: "Reboco (Liso)"}, {item: "Reboco Pintado"}, {item: "Pintura"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa11Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa11Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa11Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 12
globalCtrl.controller('vistoriaProcessoEtapa12Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Marque o tipo de forro do telhado";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa13";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "12";
  $scope.opcoesCombobox = [ {item: "Alvenaria"}, {item: "Madeira"}, {item: "PVC"}, {item: "Pintura"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa12Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa12Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa12Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 13
globalCtrl.controller('vistoriaProcessoEtapa13Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Marque o revestimento interno";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa14";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "13";
  $scope.opcoesCombobox = [ {item: "Tijolo à vista"}, {item: "Emboço/Chapisco (áspero)"}, {item: "Reboco (liso)"}, {item: "Pintura"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa13Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa13Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa13Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 14
globalCtrl.controller('vistoriaProcessoEtapa14Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Marque o tipo de rede elétrica";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa15";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "14";
  $scope.opcoesCombobox = [ {item: "Único Circuito/Chave (Disjuntor Geral)"}, {item: "Circuitos Separados (Geral + Caixa do Disjuntor)"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa14Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa14Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa14Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 15
globalCtrl.controller('vistoriaProcessoEtapa15Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Informe a idade aparente do prédio (em anos)";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa16";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "15";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa15Ctrl != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa15Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa15Ctrl = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 16
globalCtrl.controller('vistoriaProcessoEtapa16Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Parametros da tela
  $scope.pergunta = "Marque o estado de conservação do imóvel";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa17";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "16";
  $scope.opcoesCombobox = [ {item: "Novo"},{item: "Entre novo e regular"},{item: "Regular"},{item: "Entre regular e necessita reparos simples"},{item: "Entre necessita reparos simples e reparos importantes"},{item: "Entre reparos importantes e imóvel sem valor (Ruínas)"},{item: "Imóvel sem valor (Ruínas)"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa16Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa16Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa16Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 17
globalCtrl.controller('vistoriaProcessoEtapa17Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Coloque suas observações sobre o prédio do sinistro (informar se há algum tipo de agravante, ou qualquer situação fora do normal)";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa18";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "17";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa17Ctrl != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa17Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa17Ctrl = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 18
globalCtrl.controller('vistoriaProcessoEtapa18Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tipo de Sinistro";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa19";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "18";
  $scope.opcoesCombobox = [ {item: "Vendaval"},{item: "Granizo"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa18Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa18Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa18Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 19
globalCtrl.controller('vistoriaProcessoEtapa19Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Você já tem a confirmação de que houve registros de ventos com velocidade superior a 54Km/h e abaixo de 90km/h, na região na data do sinistros? (Você pode conferir neste link http://inmet.gov.br/)";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa20";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "19";
  $scope.opcoesCombobox = [ {item: "Sim, há registros de ventos fortes acima de 54km/h"},{item: "Não, não há registros de ventos fortes acima de 54Km/h"},{item: "Não foram ainda analisados dados meteorólogicos do local na data do sinistro"} ]
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa19Ctrl != undefined ){
    $scope.selectedOption = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa19Ctrl;
  }
  //Ação próximo
  $scope.actionNext = function(selectedOption){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa19Ctrl = selectedOption;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 20
globalCtrl.controller('vistoriaProcessoEtapa20Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Houve danos ao telhado?";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa21";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "20";
  $scope.showExtra = false;
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa20Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa20Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa20Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa20Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
})

//Etapa 21
globalCtrl.controller('vistoriaProcessoEtapa21Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Houve entrada de água no interior do prédio?";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa22";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "21";
  $scope.showExtra = false;
  $scope.textLabel = "A entrada de agua se deu por abertura que não existia antes do sinistro?";
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa21CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa21CtrlExtraField;
  }
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa21Ctrl == "NAO" ){
    $scope.showExtra = true;
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa21Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.showExtra = true;
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa21Ctrl = "SIM";
    DBManager.saveVistorias();
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.showExtra = false;
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa21Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa21CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }
})

//Etapa 22
globalCtrl.controller('vistoriaProcessoEtapa22Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });

  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;

  //Parametros da tela
  $scope.pergunta = "Marque os tipos de danos causados";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa23";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "22";
  $scope.textLabel = "Explique:";
  $scope.showExtra = false;
  //Prenche o campo adiconal com valor já preenchido se existir
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlExtraField != undefined ){
    $scope.extraField = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlExtraField;
  }
  //Coloca o valor dafault falso nos campos caso nao tenha na base
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlTelhado == undefined ){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlTelhado = false;
  }
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlForro == undefined ){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlForro = false;
  }
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlPintura == undefined ){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlPintura = false;
  }
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlMoveis == undefined ){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlMoveis = false;
  }
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlEletronicos == undefined ){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlEletronicos = false;
  }
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlOutros == undefined ){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlOutros = false;
  }
  //Exibe o combobox se o outros for true
  $scope.showExtra = Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlOutros;
  //Depois de já lidos os valores do banco ou preenchidos com o valor default monta a lista de exibição
  $scope.optionsList = [
    { text: "Telhado", checked: Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlTelhado },
    { text: "Forro", checked: Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlForro },
    { text: "Pintura", checked: Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlPintura },
    { text: "Móveis", checked: Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlMoveis },
    { text: "Equipamentos Eletrônicos", checked: Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlEletronicos },
    { text: "Outros", checked: Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlOutros }
  ];

  //Acao selecionar checkbox
  $scope.changeSetting = function(item){
    if( item.text == "Telhado" ){
      //Salva Telhado
      Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlTelhado = item.checked;
    }else if( item.text == "Forro" ){
      //Salva Forro
      Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlForro = item.checked;
    }else if( item.text == "Pintura" ){
      //Salva Pintura
      Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlMoveis = item.checked;
    }else if( item.text == "Móveis" ){
      //Salva Móveis
      Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlMoveis = item.checked;
    }else if( item.text == "Equipamentos Eletrônicos" ){
      //Salva Equipamentos Eletrônicos
      Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlEletronicos = item.checked;
    }else if( item.text == "Outros" ){
      //Salva Outros
      Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlOutros = item.checked;
      $scope.showExtra = item.checked;
    }
    DBManager.saveVistorias();
  }

  //Ação próximo
  $scope.actionNext = function(extraFieldValue){
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa22CtrlExtraField = extraFieldValue;
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

})

//Etapa 23
globalCtrl.controller('vistoriaProcessoEtapa23Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Houve danos no exterior do prédio segurado?";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa24";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "23";
  $scope.showExtra = false;
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa23Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa23Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa23Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa23Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
})

//Etapa 24
globalCtrl.controller('vistoriaProcessoEtapa24Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Houve entupimento de calha?";
  $scope.proximoCtrl = "menu.vistoriaProcessoEtapa25";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "24";
  $scope.showExtra = false;
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa24Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa24Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa24Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa24Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
})

//Etapa 25
globalCtrl.controller('vistoriaProcessoEtapa25Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Houve danos no interior do prédio segurado?";
  $scope.proximoCtrl = "menu.vistoriaItemReclamados";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "25";
  $scope.showExtra = false;
  $scope.buttonYes = "button-positive";
  $scope.buttonNo = "button-positive";
  //Caso já tenha resposta e seja Nao exibe os campos ocultos
  if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa25Ctrl == "NAO" ){
    $scope.buttonNo = "button-dark";
  }else if( Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa25Ctrl == "SIM" ){
    $scope.buttonYes = "button-dark";
  }
  //Acão Sim
  $scope.actionYes = function (){
    $scope.buttonYes = "button-dark";
    $scope.buttonNo = "button-positive";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa25Ctrl = "SIM";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
  //Acão Não
  $scope.actionNo = function (){
    $scope.buttonYes = "button-positive";
    $scope.buttonNo = "button-dark";
    Database.vistorias[Database.currentVistoria].vistoriaProcessoEtapa25Ctrl = "NAO";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId} );
  }
})
