/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');

var app = module.exports = express.createServer();

var chat = require('./routes/chat_servidor');

var http = require('http')

// Configuration

app.configure(function(){
  //app.set('port', process.env.PORT || 3000)
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
/*
app.get('/prueba', function(req, res) {
  res.send('Accion de prueba');
});
*/

app.get('/chat', function(res, res) {
  res.render('chat');
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});


var server = http.createServer(app)
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

//Iniciamos el server
chat.iniciar(server);
