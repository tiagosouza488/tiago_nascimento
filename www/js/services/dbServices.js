globalServices.service('Database', [function(){
  this.settings=null;
  this.sinistros=null;
  this.vistorias=null;
  this.path="databases";
  this.currentVistoria=null;
  this.getNextRegistroFotos = function(){
  }
}]);

globalServices.service('DBManager', ['FileManager','DirManager','Database',function(FileManager,DirManager,Database){

  //Contantes
  var DB_SETTINGS="settings.db";
  var DB_SINISTROS="sinistros.db";
  var DB_VISTORIAS="vistorias.db";

  //Facilita o controle deste service
  var DBManager = this;

  DBManager.start = function(onSuccess){
    // Cria diretorio para arquivo de controle
    DirManager.create_r(Database.path,function(){
      //Faz a leitura do arquivo do arquivo de configuracao
      FileManager.read_file(Database.path,DB_SETTINGS,function(dbdata){
        //Se o arquivo tem conteudo atualiza a variavel global, Se o arquivo nao tem conteudo pega cria o objeto vazio
        if( dbdata == null || dbdata == "" ){
          //inicializa o settings
          Database.settings = {
            helpView: false,
            loginSuccess: false
          }
          console.log(DB_SETTINGS+' inicializado');
          DBManager.dbCommit(DB_SETTINGS,Database.settings);
        }else{
          //atualiza os settings com o valor lido da base
          Database.settings = JSON.parse(dbdata);
          console.log(DB_SETTINGS+' carregado');
        }
        onSuccess();
      },function(err){ console.log('ERROR - impossivel ler '+DB_SETTINGS+": "+JSON.stringify(err)); });

      //Faz a leitura do arquivo de sinistros que vem do site
      FileManager.read_file(Database.path,DB_SINISTROS,function(dbdata){
        //Se o arquivo tem conteudo atualiza a variavel global, Se o arquivo nao tem conteudo pega cria o objeto vazio
        if( dbdata == null || dbdata == "" ){
          //inicializa o settings
          Database.sinistros = [];
          console.log(DB_SINISTROS+' inicializado');
          DBManager.dbCommit(DB_SINISTROS,Database.sinistros);
        }else{
          //atualiza os settings com o valor lido da base
          Database.sinistros = JSON.parse(dbdata);
          console.log(DB_SINISTROS+' carregado');
        }
      },function(err){ console.log('ERROR - impossivel ler '+DB_SINISTROS+": "+JSON.stringify(err)); });

      //Faz a leitura do arquivo vistorias que é o que tem para enviar pro site
      FileManager.read_file(Database.path,DB_VISTORIAS,function(dbdata){
        //Se o arquivo tem conteudo atualiza a variavel global, Se o arquivo nao tem conteudo pega cria o objeto vazio
        if( dbdata == null || dbdata == "" ){
          //inicializa o settings
          Database.vistorias = [];
          console.log(DB_VISTORIAS+' inicializado');
          DBManager.dbCommit(DB_VISTORIAS,Database.vistorias);
        }else{
          //atualiza os settings com o valor lido da base
          Database.vistorias = JSON.parse(dbdata);
          console.log(DB_VISTORIAS+' carregado');
        }
      },function(err){ console.log('ERROR - impossivel ler '+DB_VISTORIAS+": "+JSON.stringify(err)); });

    },function(err){ console.log('ERROR - erro ao criar database '+DB_VISTORIAS+": "+JSON.stringify(err)); });
  }

  DBManager.dbCommit = function (dbname, data){
    //Limpa arquivo
    //dbg("DBManager","dbCommit")("Gravando");
    FileManager.remove_file(Database.path+"/"+dbname,function(){
      var jsonse = JSON.stringify(data);
      var blob = new Blob([jsonse], {type: "application/json"});
      //Salva posicao atualizada
      FileManager.write_file(Database.path,dbname,blob,function(){ console.log("Save: "+dbname); },function(err){ console.log('ERROR - write_file '+dbname+": "+JSON.stringify(err)); } );
    },function(err){ console.log('ERROR - cleanup erro '+dbname+": "+JSON.stringify(err)); });
  }

  DBManager.saveSettings = function(){
    DBManager.dbCommit(DB_SETTINGS,Database.settings);
  }

  DBManager.saveSinistros = function(){
    DBManager.dbCommit(DB_SINISTROS,Database.sinistros);
  }

  DBManager.saveVistorias = function(){
    DBManager.dbCommit(DB_VISTORIAS,Database.vistorias);
  }

}])
