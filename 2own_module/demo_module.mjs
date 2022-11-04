/*
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
*/
import { createServer } from 'http';
import { myDateTime } from './myfirstmodule';


createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.write("A dátum és a pontos idő jelenleg: " + myDateTime());
  res.end();
}).listen(3000);

/*
csak így fogjuk tudni futtatni
node --experimental-modules --es-module-specifier-resolution=node demo_module.mjs
-experimental-loader flag használata azt eredményezi, hogy a fő modul mindig az ES6 betöltőn keresztül töltődik be.
*/