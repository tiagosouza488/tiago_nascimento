globalServices.service('CameraSrv', ['$q','Database','FileManager', function($q, Database, FileManager) {

  var CameraSrv = this;

  CameraSrv.resolution = {
    quality: 75,
    targetWidth: 400,
    targetHeight: 600,
    saveToPhotoAlbum: false,
    destinationType: Camera.DestinationType.FILE_URI
  };

  CameraSrv.capturarFoto = function(options) {
    var q = $q.defer();

    navigator.camera.getPicture(function(result) {
      // Do any magic you need
      q.resolve(result);
    }, function(err) {
      q.reject(err);
    }, options);

    return q.promise;
  }

  CameraSrv.tirarFoto = function (sinistroId, step, pictureList, success, error){

    //Bate a foto
    CameraSrv.capturarFoto(CameraSrv.resolution).then(function(imageURI) {
      imgName = "sin"+sinistroId+"_step"+step+"_pic"+pictureList.length+".png";
      //Se retornou um file URI como pedido faz um move_file normal
      if( imageURI.indexOf("file:") === 0 ) {
        //Se está no celular vem URL do arquivo
        FileManager.move_file(imageURI, Database.path, imgName,
          function(imgNewPlace){
            success({"name": imgName, "id": pictureList.length, "toShow": imgNewPlace.toURL(),"path": imgNewPlace.toURL()});
          },
          function(error){
            console.log(error);
          });
      }
      //Se recebeu o a foto inteira em hexadecimal cria um arquivo e grava conteudo
      else{
          //cria o arquivo da foto
          FileManager.write_file(Database.path,imgName,imageURI,function(evt,fileEntry){
            success({"name": imgName, "id": pictureList.length, "toShow": "data:image/jpeg;base64,"+imageURI,"path": fileEntry.toURL()});
          },function(err){ console.log("Erro criar file no step "+step); console.log(err) } );
      }
    }, function(err) {
      error(err);
    });
  }

  CameraSrv.enviarFoto = function(imageData){
    var options = {
        fileKey: "file",
        fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
        chunkedMode: false,
        mimeType: "image/jpg"
    };
    $cordovaFileTransfer.upload(SERVER_ADDR+'sinistros/upload/2/3', imageData, options).then(function(result) {
        console.log("SUCCESS: ");
        console.log(result);
        //alert(JSON.stringify(result.response));
    }, function(err) {
        console.log("ERROR: ");
        console.log(err);
        //alert(JSON.stringify(err));
    }, function (progress) {
        // constant progress updates
        console.log('progress: ');
        console.log(progress);
    });
  }

}])
