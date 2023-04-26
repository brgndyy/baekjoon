const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);

const aArr = [];
const bBrr = [];
let answer = "";

for (let i = 1; i <= N * 2; i++) {
  if (i <= N) {
    let splitArr = input[i].split(" ").map((num) => Number(num));
    aArr.push(splitArr);
  } else {
    splitArr = input[i].split(" ").map((num) => Number(num));
    bBrr.push(splitArr);
  }
}

for (let j = 0; j < aArr.length; j++) {
  for (let k = 0; k < aArr[j].length; k++) {
    let sum = aArr[j][k] + bBrr[j][k];

    answer += sum + " ";
  }
  answer += "\n";
}

console.log(answer.trim());
