const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const B = Number(input[1]);
const N = input[0];

console.log(parseInt(N, B));
