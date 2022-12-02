import fs from 'fs';
const data = fs.readFileSync("input.txt").toString().split("\n\n").map(line => line.split("\n"))
const elves = data.map(l => l.reduce((a,b) => parseInt(a)+parseInt(b),0))
elves.sort((a,b) => {return b - a})
console.log(elves[0])
console.log(elves[0]+elves[1]+elves[2])
