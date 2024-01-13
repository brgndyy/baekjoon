const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

const numArr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < N; i++) {
  let memoizedSum = 0;

  for (let j = i - 1; j >= 0; j--) {
    memoizedSum += numArr[j];
  }

  answer += memoizedSum;
  answer += numArr[i];
}

console.log(answer);
