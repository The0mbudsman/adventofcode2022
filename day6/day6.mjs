import fs from 'fs';
const data = fs.readFileSync("./key.txt").toString();
const size = 14
for (var i = 0 ; i < [...data].length; i++) {
    const window = []
    for (var j=0 ; j < size ; j++) {
        window.push(data.charAt(i+j))
    }
    if (window.length == [...new Set(window)].length){
        console.log(i+size)
        console.log(window)
        break;
    }
}