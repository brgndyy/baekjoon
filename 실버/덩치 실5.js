const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

let arr = input.map(arr => arr.split(' ').map(str => Number(str)));
let answer =[];

for(let i = 0; i < arr.length; i++){
    let [weight, height] = arr[i];
    let rank = 1;
    
    for(let j = 0; j < arr.length; j++){
        
        if(i === j){
            continue;
        } else if(weight < arr[j][0] && height < arr[j][1]){
            rank++;
        }
    }
    
    answer.push(rank);
}


console.log(answer.join(' '));