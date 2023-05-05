const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const K = Number(input[0]);
let arr = [];

for (let i = 1; i <= K; i++) {
  if (input[i] === "0") {
    arr.pop();
  } else {
    arr.push(Number(input[i]));
  }
}

console.log(arr.length === 0 ? 0 : arr.reduce((a, b) => a + b, 0));
