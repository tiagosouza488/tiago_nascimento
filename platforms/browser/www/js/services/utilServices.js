globalServices.service('debug', [function(){
  this.info = function(bucket, tag){
    return function(message){
      var msgData="";
      if(typeof bucket != 'undefined'){
        msgData = "["+bucket+"]";
      }
      if(typeof tag != 'undefined'){
        msgData += "["+tag+"]";
      }
      if(typeof message != 'object'){
        msgData += ": "+message;
      }else{
        msgData += ": "+JSON.stringify(message);
      }
      console.log(msgData);
    };
  }
}])
