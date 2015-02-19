
var io
exports.iniciar = function(http) {
	io = require('socket.io').listen(http)

	//Este evento se disparara cada vez que un nuevo usuario se conecte
	io.sockets.on('connection', function(socket) {
		//El evento emit() permite enviar un mensaje al usuario que acaba de conectarse
		socket.emit('mensaje', {text: 'Bienvenido.'})
		//Este evento manda un mensaje a los usuarios que ya estan conectados
		socket.broadcast.emit('mensaje', {text: 'Un nuevo usuario se ha conectado.'})
		//Este evento aviso a los usuarios que un usuario se ha desconectado
		socket.on('disconnect', function() {
			socket.broadcast.emit('mensaje', {text: 'Un usuario se ha desconectado.'})
		})
	})
}
