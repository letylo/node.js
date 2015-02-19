//Creamos un objeto  io del lado cliente
var socket = io.connect('http://localhost:3000')

//Asignamos un evento que debe coincidir con el servidor
socket.on('mensaje', function(data) {
	$("#mensajes").append('<p> ' + data.text + ' </p>')
})