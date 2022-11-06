/*A fájl system package rendelkezésre áll, létre hozhatunk minden egyes útvonal kapcsán egy html fájlt, amit a beérkező kérések alkalmával fogunk kiszolgálni. Készítsünk egy home.html fájlt, amiben létre hozhatunk egy alap html struktúrát, és egy login.html-t Bejelentkezés tartalommal és a 404.html-t is.*/
//telepíteni kell az fs-t

import { createServer } from 'http';
import { readFile } from "fs";
const server = createServer(function(req, res) {
/*const fs = require("fs"); nem lesz jó
https://stackoverflow.com/questions/74134116/referenceerror-require-is-not-defined-in-es-module */

    // Router
    switch (true) {
        case req.url === "/" && req.method === "GET":
/*Fájlt beolvasni a readfile(): nevű function-el tudunk, amely két paramétert vár. Elsőként a beolvasandó fájl operációs rendszeren elfoglalt útvonalát, második paraméterként vár egy callback functiont */
            readFile("home.html", function(err, data) {
                res.setHeader("content-type", "text/html; charset=utf-8");
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url === "/bejelentkezes" && req.method === "GET":
            readFile("login.html", function(err, data) {
                res.setHeader("content-type", "text/html; charset=utf-8");
                res.writeHead(200);
                res.end(data);
            });
            break;
        default:
            readFile("404.html", function(err, data) {
                res.setHeader("content-type", "text/html; charset=utf-8");
                res.writeHead(200);
                res.end(data);
            });
    }
    /*A response ismérvei a következők: a responsnak szintén van headerje, ugyancsak meta információkat tartalmaz, csak ez esetben a válasszal kapcsolatban, ugyancsak van body-ja, ahol a szerver által szolgáltatott tartalom utazik, van ún. státusza, ami a kérés kimenetelével kapcsolatos 3 jegyű szám, valamint ez a státusz számunkra is olvasható kimenettel is ki van egészítve. Pl a 200-as státusz az sikeres kérésnek a státusza. Tehát amikor a nodejs-es programba beérkezik egy kérés, mindig ez a function fut, és nekünk ezen paraméterekből kell megállapítani, hogy a válaszba milyen adatok kerüljenek bele. A két fontos adat, amiből megállapíthatjuk azt, hogy egy beérkező request kapcsán mi az a funkcionalitás, ami futtatandó, az az útvonal és a method. Ezt a két adatot a request objectből kiszedhetjük és most a példa kedvéért kilogolhatjuk.  */
    console.log(req.url);
    console.log(req.method);
});
server.listen(8080);