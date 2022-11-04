/*
w3school: 
A Node.js rendelkezik egy beépített HTTP nevű modullal, amely lehetővé teszi a Node.js számára, hogy adatokat vigyen át a Hyper Text Transfer Protocol (HTTP) protokollon keresztül.

var http = require('http');
A HTTP-modul létrehozhat egy HTTP-kiszolgálót, amely figyeli a szerverportokat, és választ ad a kliensnek. A következő createServer()módszerrel hozhatsz létre HTTP-kiszolgálót:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //kezeljük a választ:
  res.end('Hello World!');
}).listen(8080); 
A http.createServer() metódusba átadott függvény akkor kerül végrehajtásra, amikor valaki megpróbál hozzáférni a számítógéphez a 8080-as porton.

Ha az es szerinti szintaxist használjuk, akkor meg kell változtatni a fájl kiterjesztését mjs-re.
Az .mjs kiterjesztésű fájl egy JavaScript-forráskódfájl, amelyet ECMA-modulként (ECMAScript-modul) használnak a Node.js-alkalmazásokban. 
Az MJS kiterjesztés segíti a Node.jst, hogy azonosítani tudja, egy modul hagyományos JS vagy ES6 szabvány szerint kódolt e. 
2018 óta az ismertebb böngészők támogatják a használatát.
*/


import { createServer } from 'http';
const port = 3000;//itt bármit megadhatunk
createServer(function (req, res) {
  /*res.writeHead(200, {'Content-Type': 'text/html' }); így nem lesz jó az ékezet 
  le kell kezelünk a választ:*/
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end('Működik a szerverem');
//}).listen(8080);//itt bármit megadhatunk, azt is hogy 3000
}).listen(port, () => {
  console.log(`A szerver ezen a porton fut: ${port}`);
});

//https://nodejs.org/api/synopsis.html