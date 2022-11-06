import { createServer } from 'http';
//import { IncomingForm } from 'formidable';
import pkg from 'formidable';
const { IncomingForm } = pkg;
import { rename } from 'fs';

createServer(function (req, res) {
  if (req.url == '/fileupload') {
    let form = new IncomingForm();
    form.parse(req, function (err, fields, files) {
      //a feltöltött cucc először a gép ideiglenes mappájába kerül
      let oldpath = files.filetoupload.filepath;
      //mentsük oda, ahová szeretnénk, hogy kerüljön
      //backslasht cseréld le nem lehet szóköz a fájl útvonalában
      let newpath = 'C:/Users/Zita/Pictures/files/' + files.filetoupload.originalFilename;
      rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write('A fájlod feltöltésre került!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);