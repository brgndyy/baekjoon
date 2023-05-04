const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputArr = input.map((num) => Number(num)).sort((a, b) => a - b);

let avg = inputArr.reduce((a, b) => a + b, 0) / inputArr.length;

let middleNum = inputArr[Math.floor(inputArr.length / 2)];

console.log(avg);
console.log(middleNum);
