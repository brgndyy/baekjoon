const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let answer = 1;

for (let i = 1; i <= N; i++) {
  answer *= i;
}

console.log(answer);
