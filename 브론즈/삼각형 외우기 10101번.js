const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let numArr = input.map((num) => Number(num));
let numSet = [...new Set(numArr)];
let numSum = numArr.reduce((a, b) => a + b, 0);

if (numSum === 180 && numSet.length === 1) {
  console.log("Equilateral");
} else if (numSum === 180 && numSet.length === 2) {
  console.log("Isosceles");
} else if (numSum === 180 && numSet.length === 3) {
  console.log("Scalene");
} else {
  console.log("Error");
}
