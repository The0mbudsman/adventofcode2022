import fs from 'fs';
const data = fs.readFileSync("./key.txt").toString().split("\n").map(line => line.split(","))
const expanded = data.map(item => {
    return [createRange(item[0]), createRange(item[1])].sort((a,b) => a.length - b.length)
})

//p1
const fullyContains = expanded.filter(range => {
    return range[1].includes(range[0][0]) && range[1].includes(range[0][range[0].length-1])
})
console.log(fullyContains.length)

//p2
const someContains = expanded.filter(range => {
    return range[1].filter(item => range[0].includes(item)).length > 0
})
console.log(someContains.length)


function createRange(item){
    const [bot, top] = (item.split("-")).map(str => parseInt(str))
    const range = [...Array(top+1).keys()].slice(bot)
    return range
}

