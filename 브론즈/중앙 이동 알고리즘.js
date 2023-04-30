const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let num = 2;
let count = 1;

while (N > 0) {
  num += count;

  count *= 2;

  N--;
}

console.log(num * num);
