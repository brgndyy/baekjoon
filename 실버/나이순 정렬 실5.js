const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

let arr = input.map((arr) => arr.split(" "));

let sorted = arr.sort((a, b) => a[0] - b[0]);
let answer = "";

sorted.forEach((arr) => (answer += arr.join(" ") + "\n"));

console.log(answer);
