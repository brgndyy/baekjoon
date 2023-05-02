const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(Number(input - 2) * Number(input));
console.log(3);
