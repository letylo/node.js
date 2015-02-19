var http = require('http');
//importamos el modulo formidable
var formidable = require('formidable');
var subida_archivos = require('./modulos/subida_archivos');

http.createServer(function(peticion, respuesta) {
	//Verificamos si esta llegando una peticion POST, es decir si se ha enviado el formulario
	if (peticion.method == 'POST') {
		//Creamos una instancia de IncomingForm
		var incoming = new formidable.IncomingForm();
		//Carpeta donde se guardaran los archivos.
		incoming.uploadDir = 'archivos_subidos';
		//Parseamos la peticion
		incoming.parse(peticion);
		//Se dispara en caso de que haya algun error
		incoming.on('error', function(err) {
			respuesta.writeHead(200, {'Content-Type': 'text/html'});
			respuesta.end(subida_archivos.responderSubida(false));
		});
		//Se dispara cuando el archivo llego el servidor
		incoming.on('file', function(field, file) {
			console.log('Archivo recibido');
		});
		//Se dispara antes de guardar el archivo
		incoming.on('fileBegin', function(field, file){
         	if(file.name){
            	//Modificamos el nombre del archivo por código al azar más "_nombre original del archivo"
            	file.path += '_' + file.name;
         	}
        });
		//Se dispara una vez que los archivos fueron guardados
		incoming.on('end', function() {
			respuesta.writeHead(200, {'Content-Type': 'text/html'});
			respuesta.end(subida_archivos.responderSubida(true));
		});
	}else {
		respuesta.writeHead(200, {'Content-Type': 'text/html'});
		respuesta.end(subida_archivos.dibujarFormulario());
	}
}).listen(3000, '127.0.0.1');
console.log('Servidor funcionando');