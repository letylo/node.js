function dibuarCabecera(){
   var html = '<!DOCTYPE html>';
   html += '<html>';
   html += '<head>';
   html += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
   html += '</head>';
   html += '<body>';
   return html;
}
function dibujarPie(){
   var html = '</body>';
   html += '</html>';
   return html;
}
function dibujarFormulario(){
   var html = dibuarCabecera();
   //el atributo enctype con el valor multipart/form-data es para que el 
   //formulario pueda enviar atchivos
   html += '<form method="post" enctype="multipart/form-data">';
   html += '<label> Archivo: </label>';
   html += '<input type="file" name="file" />';
   html += '<input type="submit" value="Subir" />';
   html += '</form>';
   html += dibujarPie();
   return html;
}
function responderSubida(archivo_subido){
   var html = dibuarCabecera();
   if(archivo_subido){
      html += '<p> <strong> El archivo ha sido subido correctamente. <strong> </p>';
   }else{
      html += '<p style="color: #f00;"> Error al intentar subir el archivo. </p>';
   }
   html += '<p> <a href="/"> Volver </a> </p>';
   html += dibujarPie();
   return html;
}
exports.dibujarFormulario = dibujarFormulario;
exports.responderSubida = responderSubida;