const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);

const numArr = input[1].split(" ").map((str) => Number(str));
const v = Number(input[2]); // 2

console.log(numArr.filter((num) => num === v).length);
