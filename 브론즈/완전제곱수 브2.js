const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [M, N] = [Number(input[0]), Number(input[1])];

let numsArr = [];
let answer = [];

for (let i = M; i <= N; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    numsArr.push(i);
  }
}

if (numsArr.length === 0) {
  console.log(-1);
} else {
  answer.push(numsArr.reduce((a, b) => a + b, 0));
  answer.push(Math.min(...numsArr));

  console.log(answer.join("\n"));
}
