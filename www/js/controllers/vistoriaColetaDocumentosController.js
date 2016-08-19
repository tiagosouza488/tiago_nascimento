globalCtrl.controller('vistoriaColetaDocumentos01Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire uma foto do aviso de sinistro escrito de próprio punho, informando data, hora e circunstâncias do sinistro"
  $scope.proximoCtrl = "menu.vistoriaColetaDocumentos02";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1501";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos01Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos01CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos01Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos01CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos01Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})

globalCtrl.controller('vistoriaColetaDocumentos02Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire uma foto da declaração de inexistência de outros seguros e dados bancários"
  $scope.proximoCtrl = "menu.vistoriaColetaDocumentos03";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1502";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos02Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos02CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos02Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos02CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos02Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})

globalCtrl.controller('vistoriaColetaDocumentos03Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire uma foto da declaração de inexistência de outros seguros e dados bancários"
  $scope.proximoCtrl = "menu.vistoriaColetaDocumentos04";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1503";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos03Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos03CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos03Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos03CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos03Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})

globalCtrl.controller('vistoriaColetaDocumentos04Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire uma foto dos documento de identificação: CPF e RG ou CNH do segurado"
  $scope.proximoCtrl = "menu.vistoriaColetaDocumentos05";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1504";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos04Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos04CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos04Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos04CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos04Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})

globalCtrl.controller('vistoriaColetaDocumentos05Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Ata de eleição da diretoria (para empresas S.A)"
  $scope.proximoCtrl = "menu.vistoriaColetaDocumentos06";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1505";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos05Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos05CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos05Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos05CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos05Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})

globalCtrl.controller('vistoriaColetaDocumentos06Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Contrato/Estatuto Social"
  $scope.proximoCtrl = "menu.vistoriaColetaDocumentos07";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1506";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos06Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos06CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos06Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos06CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos06Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})

globalCtrl.controller('vistoriaColetaDocumentos07Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Tire fotos dos orçamentos discriminados para a reposição dos bens sinistrados - favor solicitar que nos orçamentos sejam discriminados as quantidades e os valores unitários das peças utilizadas bem como o valor de mão de obra"
  $scope.proximoCtrl = "menu.vistoriaColetaDocumentos08";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1507";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos07Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos07CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos07Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos07CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos07Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})

globalCtrl.controller('vistoriaColetaDocumentos08Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Nota(s) fiscal(is) de conserto/substituição caso este(a) já tenha sido efetuado(a)"
  $scope.proximoCtrl = "menu.vistoriaColetaDocumentos09";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1508";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos08Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos08CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos08Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos08CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos08Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})

globalCtrl.controller('vistoriaColetaDocumentos09Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Laudo(s) técnico(s) - informando a causa e extensão dos danos (no caso de equipamentos eletro-eletrônicos)"
  $scope.proximoCtrl = "menu.vistoriaColetaDocumentos10";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1509";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos09Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos09CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos09Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos09CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos09Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})

globalCtrl.controller('vistoriaColetaDocumentos10Ctrl', function($scope, $ionicHistory, $stateParams, $state, debug, DBManager, Database, CameraSrv, DirManager, FileManager) {
  // Controle de paginacao da tela
  $ionicHistory.nextViewOptions({
	   disableBack: false
  });
  //Le as propriedades da vistoria
  $scope.sinistro = Database.sinistros[$stateParams.sinistroId].sinistro;
  //Parametros da tela
  $scope.pergunta = "Recorte de jornal ou laudo meteorológico"
  $scope.proximoCtrl = "menu.vistoriaAta";
  $scope.cursorIndex = $stateParams.sinistroId;
  $scope.step = "1510";
  $scope.showExtra = false;
  $scope.showNo = true;

  //Se já respondeu a esta pergunta puxa as fotos do Camera
  if( Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos10Ctrl == "OK" ){
    $scope.pictureList = Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos10CtrlPictures;
    $scope.showExtra = true;
    $scope.showNo = false;
  }else{
    $scope.pictureList = [];
  }

  //Ação próximo
  $scope.actionNext = function(){
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação nao tem documento
  $scope.actionNo = function(){
    Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos10Ctrl = "NOK";
    DBManager.saveVistorias();
    $state.go($scope.proximoCtrl, {sinistroId: $stateParams.sinistroId});
  }

  //Ação tirar foto
  $scope.actionTirarFoto = function(){
    //Faz a captura da foto
    CameraSrv.tirarFoto($scope.sinistro.id, $scope.step, $scope.pictureList, function(retorno){
      $scope.fotoCapturada = retorno.toShow;
      $scope.pictureList.push(retorno);
      $scope.$apply(function () {
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos10CtrlPictures = $scope.pictureList;
        //Registra que este passo está OK
        Database.vistorias[Database.currentVistoria].vistoriaColetaDocumentos10Ctrl = "OK";
        DBManager.saveVistorias();
        //Depois da foto exibe a lista de fotos e aparece a opção proximo
        $scope.showExtra = true;
        $scope.showNo = false;
      });
    });
  }
})