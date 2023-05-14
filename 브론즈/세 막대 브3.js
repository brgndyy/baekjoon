const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let numArr = input
  .split(" ")
  .map((num) => Number(num))
  .sort((a, b) => b - a);

let answer = 0;

while (true) {
  if (numArr[0] >= numArr[1] + numArr[2]) {
    numArr[0] -= 1;
  } else {
    answer = numArr[0] + numArr[1] + numArr[2];
    break;
  }
}

console.log(answer);
