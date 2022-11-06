// function(__dirname, __filename, module, require, exports) {

function add(num1, num2) {
    return num1 + num2;
}
//es6 
export default add;

/*régen ez így festett:
module.exports = add; // ide kell bekötni a megosztani kívánt funkcionalitást, Ide be lehet kötni bármilyen adatot, de tipikusan functiont vagy objectet szokás exportálni. Próbáljuk meg az add functiont megosztani a külvilággal, így az index.js-ből ez elérhetővé válik. Az indexen belül a require() functionon belül meg kell adni az elérni kívánt fájlnak a relatív útvonalát. A fájl kiterjesztése javascript fájlok esetén elhagyható, de érdemes explicitnek lennie és inkább megadni azt is. Ezt tipikusan szokás változóban megadni, és így futtatni:
const add = require("./calculator.js");
console.log(add(2, 3));
amit viszont az index.js-be írunk le
*/