var http = require('http');
http.createServer(function(peticion, respuesta){
	var codigo_html = '<html> <head> <title> Ejemplo de hola mundo</title> </head> <body> Hola mundooo </body> </html>';
	      respuesta.writeHead(200, 'text/html');
	      respuesta.end(codigo_html);
}).listen(3000, '127.0.0.1');
console.log('El servidor esta funcionando correctamente en http://localhost:3000/');
