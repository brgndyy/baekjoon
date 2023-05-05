const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let oneNum = Number(input[0].split(" ")[0]); // 2
let oneDen = Number(input[0].split(" ")[1]); // 7
let twoNum = Number(input[1].split(" ")[0]); // 3
let twoDen = Number(input[1].split(" ")[1]); // 5

let answer = [];

let totalDen = oneDen * twoDen; // 35
let totalNum = oneNum * (totalDen / oneDen) + twoNum * (totalDen / twoDen); // 31

function getGcd(a, b) {
  return b % a === 0 ? a : getGcd(b % a, a);
}

let gcd = getGcd(totalNum, totalDen);

answer.push(totalNum / gcd, totalDen / gcd);

console.log(answer.join(" "));
