const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

let sortedInput = input.map((str) => Number(str)).sort((a, b) => a - b);
let minusArr = [];
let gcdArr = [];
let count = 0;

for (let i = 0; i < input.length - 1; i++) {
  minusArr.push(Math.abs(input[i] - input[i + 1]));
}

function getGcd(a, b) {
  return b % a === 0 ? a : getGcd(b, b % a);
}

for (let j = 0; j < minusArr.length - 1; j++) {
  gcdArr.push(getGcd(minusArr[j], minusArr[j + 1]));
}

let gcdNum = Math.min(...gcdArr);

for (let i = 0; i < minusArr.length; i++) {
  count += minusArr[i] / gcdNum - 1;
}

console.log(count);
