globalCtrl.controller('loadCtrl', function($scope, $ionicSideMenuDelegate, $ionicPlatform, $state, DBManager, Database) {
    //Se nao está logado direciona pro login
    $ionicPlatform.ready(function() {
    console.log('Ionic plataform Ready');
      //Carrega o modo offline
      DBManager.start(function(){
        //Se nao está loga manda pra tela de sinistros
        if (Database.settings.loginSuccess != true) {
          $state.go('menu.login');
        }
        //Se nenhum caso anterior vai pra tela principal
        else{
          $state.go('menu.realizarVistorias');
        }

      });
    })
})

globalCtrl.controller('ajudaCtrl', function($scope) {
})

globalCtrl.controller('ajuda2Ctrl', function($scope) {
})

globalCtrl.controller('ajuda3Ctrl', function($scope, Database, DBManager) {
  console.log("Registrando visualizacao da ajuda")
  console.log(Database.settings)
  Database.settings.helpView = true;
  DBManager.saveSettings();
})

globalCtrl.controller('filesystemCtrl', function($scope, Database, DirManager, FileSystem, FileManager) {
  $scope.fileList = [];
  DirManager.list("", function(lista){
    //console.log(lista);
    limit = lista.length;
    for (i=0; i<limit; i++) {
        $scope.fileList.push(lista[i]);
        if( lista[i].isDirectory ){
          //console.log("Sub query");
          DirManager.list(lista[i].name, function(subLista){
            //console.log(subLista);
            subLimit = subLista.length;
            for (i2=0; i2<subLimit; i2++) {
              $scope.fileList.push(subLista[i2]);
            }
          }, function(err){ console.log(err) });
        }
    }
  }, function(err){ console.log(err) });

  function removeLista(fullPath){
    lista = $scope.fileList;
    $scope.fileList = [];
    limit = lista.length;
    for (i=0; i<limit; i++) {
      if( lista[i].fullPath != fullPath ){
        $scope.fileList.push(lista[i]);
      }
    }
  }

  $scope.onItemDelete = function(fullPath){
    FileManager.remove_file(fullPath, function(){ removeLista(fullPath); },
      function(err){
        //TYPE_MISMATCH_ERR - 11 Nao é arquivo é diretorio
        if( err.code = 11 ){
          DirManager.remove(fullPath,function(){
            $scope.$apply(function () {
              removeLista(fullPath);
            });
          },function(err){ console.log("Error: "+JSON.stringify(err)); });
        }
      });
  }

})

globalCtrl.controller('configuracoesCtrl', function($scope, Database, DBManager, $timeout) {

  $scope.settingsList = [
    { text: "Reset", checked: false },
    { text: "GPS", checked: false },
    { text: "Bluetooth", checked: false },
    { text: "VistoriaOK", checked: false },
    { text: "PrintLog", checked: false }
  ];
  $scope.changeSetting = function(item){
    if( item.text == "Reset" ){
      Database.settings.helpView = false;
      Database.settings.loginSuccess = false;
      DBManager.saveSettings();
      Database.sinistros = [];
      DBManager.saveSinistros();
      Database.vistorias = [];
      DBManager.saveVistorias();
      $timeout(function () {
        item.checked = false;
      }, 1000);
      //alert("todos os seus dados foram apagados");
    }
    if( item.text == "PrintLog" ){
      console.log(Database.vistorias);
      $timeout(function () {
        item.checked = false;
      }, 1000);
    }
    if( item.text == "VistoriaOK" ){
      // console.log(Database.vistorias);
      
      if (Database.vistorias[0].status == "NOK") {
        Database.vistorias[0].status = "OK";
        Database.vistorias[1].status = "OK";
      } else {
        Database.vistorias[0].status = "NOK";
        Database.vistorias[1].status = "NOK";
      }

      $timeout(function () {
        item.checked = false;
      }, 1000);
    }
  }
})
