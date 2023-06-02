const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let X = input;
let count = 0;
let answer = [];

while (X.length !== 1) {
  count++;
  X = X.split("")
    .map((str) => Number(str))
    .reduce((a, b) => a + b, 0)
    .toString();
}

answer.push(count);
if (X % 3 === 0) {
  answer.push("YES");
} else {
  answer.push("NO");
}

console.log(answer.join("\n"));
