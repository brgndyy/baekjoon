const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let nums = input
  .map((str) => Number(str) * Number(str))
  .reduce((a, b) => a + b, 0);

console.log(nums % 10);
