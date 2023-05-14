const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = [];

for (let i = 0; i < input.length - 1; i++) {
  let lineArr = input[i]
    .split(" ")
    .map((str) => Number(str))
    .sort((a, b) => b - a);

  if (lineArr[0] >= lineArr[1] + lineArr[2]) {
    answer.push("Invalid");
  } else if (lineArr[0] === lineArr[1] && lineArr[1] === lineArr[2]) {
    answer.push("Equilateral");
  } else if (
    lineArr[0] !== lineArr[1] &&
    lineArr[1] !== lineArr[2] &&
    lineArr[0] !== lineArr[2]
  ) {
    answer.push("Scalene");
  } else {
    answer.push("Isosceles");
  }
}

console.log(answer.join("\n"));
