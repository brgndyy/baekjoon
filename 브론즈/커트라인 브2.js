const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const k = Number(input[0].split(" ")[1]);

let inputArr = input[1]
  .split(" ")
  .map((str) => Number(str))
  .sort((a, b) => b - a);

console.log(inputArr[k - 1]);
