const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let count = 0;

while (N % 5 !== 0) {
  N -= 3;

  count++;

  if (N < 0) {
    break;
  }
}
count += N / 5;
console.log(Number.isInteger(count) ? count : -1);
