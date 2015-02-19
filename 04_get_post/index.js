var http = require('http');
var querystring = require('querystring');
var mensajes = require('./modulos/mensajes');
var mensajes_lista = new Array();
var data_post_maximo = 8 * 1024 * 1024;

http.createServer(function(peticion, respuesta) {
   //Preguntamos si lapeticion viene del metodo POST
   if (peticion.method == 'POST') {
      //Recuperamos los datos enviados desde el formulario mediante el evento on() y el valor data
      var data_post = '';
      peticion.on('data', function(data_cortada) {
         data_post += data_cortada;
         //Verificamos que el string generado no supera los 8MB
         if (data_post.length > data_post_maximo) {
            this.pause();
            respuesta.writeHead(413);
            respuesta.end('Ha surgido un error y no puede continuar.');
         }
      });
      //Convertimos los datos en un json con el metodo parse() del objeto querystring 
      //y lo guardamos en la variable data_post_objeto
      peticion.on('end', function() {
         var data_post_objeto = querystring.parse(data_post);
         //Guardamos una nueva posicion dentro del array mensajes_lista para mostrar todo por pantalla
         mensajes_lista.push({nombre: data_post_objeto.nombre, mensaje: data_post_objeto.mensaje});
         respuesta.writeHead(200, {'Content-Type': 'text/html'});
         respuesta.end(mensajes.dibujarCodigoHtml(mensajes_lista));
      });
   }else {
      respuesta.writeHead(200, {'Content-Type': 'text/html'});
      respuesta.end(mensajes.dibujarCodigoHtml(mensajes_lista));
   }
   
}).listen(3000, '127.0.0.1');
console.log('Servidor funcionando');