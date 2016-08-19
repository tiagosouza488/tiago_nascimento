////////////////////////////////////////////////////////////////////////////////
// Chamada do webservice
var SERVER_ADDR='http://sinistros.servicos.ws/v1/';
// Uso do GPS
var LOCAL_LATITUDE=0;
var LOCAL_LONGITUDE=0;
var GPS_CHANGE=false;
var GOOGLE_API="https://maps.googleapis.com/maps/api/distancematrix";
// Atualiza variaveis globais de gps
function updateCoordenadas(pos){
  LOCAL_LATITUDE = pos.coords.latitude;
  LOCAL_LONGITUDE = pos.coords.longitude;
  GPS_CHANGE = true;
  //console.log("Atualizou coordenadas");
}
//Logs de http
function onHttpError(data, status, headers, config) {
  var msg = "";
  if( status != null && typeof status != 'undefined') { msg+="[status:"+status+"]" }
  if( data != null && typeof data != 'undefined') {
		msg+="[code:"+data.code+"][msg:"+data.message+"]"
  }
  if( headers != null && typeof headers != 'undefined') { msg+="[headers:"+headers+"]" }
  if( config != null && typeof config != 'undefined') { msg+="[config:"+config+"]" }

  //console.log("[customFunctions][ERROR]"+msg);
}
//Funcao de debug para onError ou onSuccess com parametros
/*var dbg = function(bucket, tag){
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
	//alert(msgData);
    console.log(msgData);
  };
}
*/
