const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let xArr = [];
let yArr = [];

for (let i = 1; i <= N; i++) {
  xArr.push(Number(input[i].split(" ")[0]));
  yArr.push(Number(input[i].split(" ")[1]));
}

let width = Math.max(...xArr) - Math.min(...xArr);
let height = Math.max(...yArr) - Math.min(...yArr);

console.log(width * height);
