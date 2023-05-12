const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let count = 1;

for (let i = 1; i <= N; i++) {
  count *= i;
}
console.log(count);
