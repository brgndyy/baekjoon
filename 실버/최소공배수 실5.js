const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let A = Number(input.split(" ")[0]);
let B = Number(input.split(" ")[1]);

let maxNum = Math.max(A, B);
let plusNum = Math.max(A, B);
let minNum = Math.min(A, B);

if (maxNum % minNum === 0) {
  console.log(maxNum);
} else {
  while (maxNum % minNum !== 0) {
    maxNum += plusNum;
  }

  console.log(maxNum);
}
