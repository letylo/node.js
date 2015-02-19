//Incluimos el modulo mysql
var mysql = require('mysql')

//Definimos los datos de conexion
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'dam00',
	database: 'prueba'
});

//Intentamos conectar
connection.connect(function(error){
	if (error) {
		throw error;
	}else {
		console.log('Conexión correcta.')
	}
});

//Hacemos una consulta INSERT
var query = connection.query('INSERT INTO personaje(nombre, apellido, biografia) VALUES (?, ?, ?)', ['Homer', 'Simpson', 'Blabla'], function(error, result) {
	if (error) {
		throw error;
	}else {
		console.log(result)
	}
}
);

//Hacemos una consulta SELECT
var query = connection.query('SELECT nombre, apellido, biografia FROM personaje WHERE personaje_id = ?', [1], function(error, result) {
	if (error) {
		throw error
	}else {
		var resultado = result
		if (resultado.length > 0) {
			console.log(resultado[0].nombre + ' ' + resultado[0].apellido + ' / ' + resultado[0].biografia)
		}else {
			console.log('Registro no encontrado')
		}
	}
}
)

//Cerramos la conexion
connection.end()

