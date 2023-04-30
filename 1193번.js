const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input);
const NNum = Number(input);
let nums = 0;
// 해당 속하는 라인 넘버
let lineNum = 1;

while (N > 1) {
  nums += lineNum;
  lineNum++;
  N -= lineNum;
}

// 분모 분자 합해서 나와야할 최댓값

let count = 1;
let numArr = [];

if (lineNum % 2 !== 0) {
  while (lineNum > 0) {
    let numStr = `${lineNum}/${count}`;
    numArr.push(numStr);
    lineNum--;
    count++;
  }
} else {
  while (lineNum > 0) {
    let numStr = `${count}/${lineNum}`;
    numArr.push(numStr);
    lineNum--;
    count++;
  }
}

let answerIndex = NNum - nums - 1; // 3

console.log(numArr[answerIndex]);
