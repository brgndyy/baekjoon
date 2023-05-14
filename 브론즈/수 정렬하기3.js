const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

let arr = input.map((str) => Number(str)).sort((a, b) => a - b);

console.log(arr.join("\n"));
