import fs from 'fs'
const data = fs.readFileSync("./key.txt").toString().split("\n\n")
for (const model of [9000, 9001]){
    var [crates,instructions] = data
    //parse input crates
    crates = crates.split("\n")
    var stacks = []
    for (const [i,char] of [...crates.pop()].entries()){ //iterate thru 1 2 3 4 5 6 7 8 9 line
        if (char !== " "){
            const stack = crates.map(crate =>[...crate][i]).reverse().filter(val => val != " ")
            stacks.push(stack)
        }
    }
    instructions = instructions.split("\n")
    //p1
    instructions.map(command => executeCommand(command, model))
    console.log(...stacks.map(stack => stack.pop()))   

    function executeCommand(command,model){
        command = command.replace(/[^0-9]/gi, " ").replace(/[' ']+/gi, " ").trim().split(" ")
        const [qty, from, to] = command
        var lift = []
        for (let i = 0 ; i < qty; i++){
            lift.push(stacks[from-1].pop())
        }
        if (model == 9000) {
            stacks[to-1].push(...lift)
        } else if (model == 9001) {
            stacks[to-1].push(...lift.reverse())
        }
    }
}
