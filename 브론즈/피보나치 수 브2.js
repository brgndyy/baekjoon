const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let N = Number(input);

console.log(fibonaci(N));
