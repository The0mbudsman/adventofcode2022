import fs from 'fs'
const points = {X: 1,   Y:2,    Z:3}
const beats  = {X: "B", Y: "C", Z: "A"}
const loses  = {X: "C", Y: "A", Z: "B"}
const data = fs.readFileSync("./key.txt").toString().split("\n")
//p1
const scores1 = data.map(item => calc_game(item.split(" ")))
console.log(scores1.reduce((a,b) => a+b))

//p2
const scores2 = data.map(item => calc_outcome(item.split(" ")))
console.log(scores2.reduce((a,b) => a+b))

//p1
function calc_game(game){
    const [oppt,player] = game
    return points[player] + calc_winner(player,oppt)
    function calc_winner(player,oppt){
        if (loses[player] == oppt){return 6}
        else if (beats[player] == oppt){return 0}
        else return 3
    }
}

//p2
function calc_outcome(game){
    const [oppt,desired] = game
    if (desired == "X"){ 
        return points[key_from_val(oppt, beats)] + 0
    }
    else if (desired == "Z"){ 
        return points[key_from_val(oppt, loses)] + 6
    } 
    else {
        return points[key_from_val(oppt, {X:"A", Y:"B", Z:"C"})] + 3
    }

    function key_from_val(key,obj){
        return Object.keys(obj).find(item => obj[item] === key)
    }
    
}