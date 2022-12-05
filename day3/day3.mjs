import fs from 'fs'
const data = fs.readFileSync("./key.txt").toString().split("\n")

//p1
const halves = data.map(line => {
    const half = line.length/2
    return [line.slice(0,half), line.slice(half,line.length)]
})
var tot = 0
for (var i = 0 ; i < halves.length; i++){
    // this was fun, you're right https://stackoverflow.com/questions/6260756/how-to-stop-javascript-foreach
    [...halves[i][0]].every(char => {
        if (halves[i][1].includes(char)){
            tot += numFromAscii(char)
            return false
        } else return true
    })
}
console.log(tot)

//p2
var tot2 = 0
for (var i = 0 ; i < data.length; i+=3){
    const letter = [...data[i]].filter(value => data[i+1].includes(value) && data[i+2].includes(value))[0]
    tot2 += numFromAscii(letter)
}
console.log(tot2)

function numFromAscii(letter){
    const base = letter.charCodeAt(0)
    return base >= 97 ? base - 96 : base - 38
}