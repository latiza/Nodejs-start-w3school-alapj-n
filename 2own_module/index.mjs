import add from "./calculator.mjs";
console.log(add(2, 3));

//console.log(__dirname);
//console.log(__filename);

//szerver létrehozása
import { createServer } from "http";

const requestListener = (req, res) => {
    res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
    res.end(
        "Szia Uram! Futó szerver érdekel?"
    );
};

const server = createServer(requestListener);
server.listen(8080);