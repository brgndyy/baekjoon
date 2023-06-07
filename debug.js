const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [K, L] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let answer = [];
let studentMap = new Map();

for (let i = 0; i < L; i++) {
  if (studentMap.has(input[i])) {
    studentMap.delete(input[i]);
    studentMap.set(input[i], 1);
  } else {
    studentMap.set(input[i], 1);
  }
}

let studentArr = [...studentMap];

for (let i = 0; i < K; i++) {
  answer.push(studentArr[i][0]);
}

console.log(answer.join("\n"));
