var http = require('http');
var url = require('url');
var animales = require('./modulos/animales');

http.createServer(function(peticion, respuesta) {
	//Creamos un objeto que nos permite acceder a las variables GET
	var query = url.parse(peticion.url,true).query;
	var grupo = (query.grupo != undefined) ? query.grupo : '';
	respuesta.writeHead(200, {'Content-Type': 'text/html'});
	respuesta.end(animales.dibujarCodigoHtml(grupo));
}).listen(3000, '127.0.0.1');
console.log('Servidor iniciado');