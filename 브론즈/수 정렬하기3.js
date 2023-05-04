const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift();
let answer = "";

let sortInput = input
  .sort((a, b) => Number(a) - Number(b))
  .forEach((num) => (answer += num + "\n"));

console.log(answer.trim());
