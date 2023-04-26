const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split();

let num = Number(input) / 4;

let answer = "";

for (let i = 1; i <= num; i++) {
  answer += "long ";
}

console.log(answer + "int");
