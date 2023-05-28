const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let answer = [];

for (let i = 0; i < input[0].length; i++) {
  let str = [];
  for (let j = 0; j < N; j++) {
    str.push(input[j][i]);
  }

  let strSet = new Set([...str]);

  if (strSet.size === 1) {
    answer.push(input[0][i]);
  } else {
    answer.push("?");
  }
}

console.log(answer.join(""));
