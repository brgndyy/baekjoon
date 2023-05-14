const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let canvas = Array.from({ length: 100 }, (_, index) => Array(100).fill(0));
let wholeWidHei = 100 * N;
let count = 0;

for (let i = 0; i < input.length; i++) {
  // 가로축
  let xIndex = Number(input[i].split(" ")[0]); // 3

  // 세로축
  let yIndex = 99 - Number(input[i].split(" ")[1]); // 92

  for (let k = yIndex; k > yIndex - 10; k--) {
    for (let j = xIndex; j < xIndex + 10; j++) {
      canvas[k][j]++;
      if (canvas[k][j] > 1) {
        count++;
      }
    }
  }
}

console.log(wholeWidHei - count);
