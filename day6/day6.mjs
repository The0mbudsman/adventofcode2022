import fs from 'fs';
const data = fs.readFileSync("./key.txt").toString();
for (const size of [4,14]){
    for (var i = 0 ; i < [...data].length; i++) {
        const window = data.slice(i, i+size)
        if (window.length == [...new Set(window)].length){
            console.log(i+size)
            console.log(window)
            break;
        }
    }
}
