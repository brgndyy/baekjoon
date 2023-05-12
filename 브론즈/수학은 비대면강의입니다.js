const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let inputArr = input.split(" ").map((str) => Number(str));

let answer = [];

for (let i = -999; i <= 999; i++) {
  for (let j = -999; j <= 999; j++) {
    if (
      inputArr[0] * i + inputArr[1] * j === inputArr[2] &&
      inputArr[3] * i + inputArr[4] * j === inputArr[5]
    ) {
      answer.push(i, j);
    }
  }
}

console.log(answer.join(" "));
