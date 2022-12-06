import fs from 'fs';
const data = fs.readFileSync("./key.txt").toString();
const size = 4
for (var i = 0 ; i < [...data].length; i++) {
    const window = data.slice(i, i+size)
    if (window.length == [...new Set(window)].length){
        console.log(i+size)
        console.log(window)
        break;
    }
}
