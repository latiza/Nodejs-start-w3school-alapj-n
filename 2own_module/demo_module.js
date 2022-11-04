
let http = require('http');
let dt = require('./myfirstmodule');

http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
 res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.write("A dátum és a pontos idő jelenleg: " + dt.myDateTime());
  res.end();
}).listen(8080);