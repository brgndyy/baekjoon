const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift();

let inputArr = input
  .map((str) => Number(str))
  .sort((a, b) => a - b)
  .forEach((num) => console.log(num));
