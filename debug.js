const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let answer = [];

let numArr = [];

for (let i = 0; i < N; i++) {
  let arr = input
    .shift()
    .split(" ")
    .map((str) => Number(str));

  numArr.push(arr);
}

let K = Number(input.shift());

for (let t = 0; t < K; t++) {
  // 1 1 2 3
  let [i, j, x, y] = input[t].split(" ").map((str) => Number(str));
  let sum = 0;

  for (let k = j - 1; k <= y - 1; k++) {
    for (let z = i - 1; z <= x - 1; z++) {
      sum += numArr[z][k];
    }
  }

  answer.push(sum);
}

console.log(answer.join("\n"));
