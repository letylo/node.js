var http = require('http');
var url = require('url');
var fs = require('fs'); //Permite trabajar con archivos
var servidor = require('./modulos/servidor.js');

servidor.crear(http, url, fs);
console.log('El servidor esta funcionando correctamente en http://localhost:3000');
