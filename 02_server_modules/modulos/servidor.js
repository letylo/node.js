//Variable con los tipos de archivos
var mine_types = {
	'js' : 'text/javascript',
	'html' : 'text/html',
	'css' : 'text/css',
	'jpg' : 'image/jpg',
	'gif' : 'image/gif',
	'png' : 'image/png'
};

//Recibe como parametros objetos http, url y fs, y llamara a las otras dos funciones
//para devolver la respuesta correspondiente al navegador del cliente.
function crear(http, url, fs) {
	http.createServer(function(peticion, respuesta) {
		var ruta_a_archivo = devolverRutaArchivo(url, peticion);
		leerArchivo(fs, ruta_a_archivo, function(numero, contenido_archivo) {
			if(numero === 404) {
				respuesta.writeHead(numero, 'text/plain');
				respuesta.end('Error 404. El enlace no existe o ha dejado de existir.');
			}else if(numero === 500) {
				respuesta.writeHead(numero, 'text/plain');
				respuesta.end('Error interno')
			}else {
				var extension = ruta_a_archivo.split('.').pop();
				var mine_type = mine_types[extension];
				respuesta.writeHead(numero, {'Content.Type': mine_type});
				respuesta.end(contenido_archivo);
			}
		})
	}).listen(3000, '127.0.0.1');
}
//Devuelve el archivo a leer, recibe un objeto urly la peticion y devuelve
//la ubicacion del archivo a cargar.
function devolverRutaArchivo(url, peticion) {
	var path_nombre = (url.parse(peticion.url).pathname == '/') ? '/index.html' : url.parse(peticion.url).pathname;
	var ruta_a_archivo = 'contenido/' + path_nombre;
	return ruta_a_archivo;
}
//Busca el archivo y si lo encuentra lo lee, recibe como parametros, un objeto fs,
//la ruta del archivo a leer y una función de tipo callback, que se ejecuta cuando 
// el proceso de busqueda y lectura finaliza, esta funcion recibe 2 parametros, 
//el primero un numero (si encuentra el archivo 200, si lo encuntra pero no lo lee 500, 
//si no lo encuentra 404), el segundo parametro es el contenido del archivo
function leerArchivo(fs, ruta_a_archivo, callback) {
	fs.exists(ruta_a_archivo, function(existe) {
		if (existe) {
			fs.readFile(ruta_a_archivo, function(error, contenido_archivo) {
				if (error) {
					callback(500, null);
				}else {
					callback(200, contenido_archivo);
				}
			});
		}else {
			callback(404, null);
		}
	});
}
//Esta funcion es la que tendremos que llamar desde el modulo servidor
//para que realice toda la funcionalidad de escuchar peticiones y devolver archivos estaticos
//Para que la funcion este disponible y pueda llamarse desde el objeto debemos exportarla
exports.crear = crear;