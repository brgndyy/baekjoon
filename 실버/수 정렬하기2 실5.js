const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

let numArr = input.map((str) => Number(str)).sort((a, b) => a - b);

console.log(numArr.join("\n"));
