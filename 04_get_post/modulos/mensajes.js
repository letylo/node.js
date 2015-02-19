function dibujarCodigoHtml(mensajes_lista){
   var html = '<!DOCTYPE html>';
   html += '<html>';
   html += '<head>';
   html += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
   html += '</head>';
   html += '<body>';
   html += '<form action="" method="post">';
   html += '<label> Nombre </label> <br />';
   html += '<input type="text" name="nombre" required="required" /> <br />';
   html += '<label> Mensaje </label> <br />';
   html += '<textarea name="mensaje" required="required"></textarea> <br />';
   html += '<input type="submit" value="Enviar" />';
   html += '</form>';
   html += mostrarMensajes(mensajes_lista);
   html += '</body>';
   html += '</html>';
   return html;
}
function mostrarMensajes(mensajes_lista){
   var html = '<ul>';
   for(var i in mensajes_lista){
      html += '<li>';
      html += '<p> <strong> ' + mensajes_lista[i].nombre + ' </strong> dijo: </p>';
      html += '<p> ' + mensajes_lista[i].mensaje + ' </p>';
      html += '</li>';
   }
   html += '</ul>';
   return html;
}
exports.dibujarCodigoHtml = dibujarCodigoHtml;