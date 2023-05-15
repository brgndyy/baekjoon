const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let answer = [];
let numMap = new Map();

let numArr = input.map((str) => Number(str));

// 1번

let sum = parseInt(Math.round(numArr.reduce((a, b) => a + b, 0) / N));

answer.push(sum);

// 2번

let middleNum = numArr.sort((a, b) => a - b)[Math.floor(numArr.length / 2)];

answer.push(middleNum);

// 3번

numArr.forEach((num) => numMap.set(num, numMap.get(num) + 1 || 1));

let sortNum = [...numMap].sort((a, b) => b[1] - a[1]);
let filterArr = sortNum.filter((num) => num[1] === sortNum[0][1]);
let modeNum;

filterArr.length >= 2
  ? (modeNum = filterArr[1][0])
  : (modeNum = filterArr[0][0]);

answer.push(modeNum);

// 4번

let maxNum = Math.max(...numArr);
let minNum = Math.min(...numArr);

let minusNum = maxNum - minNum;

answer.push(minusNum);

console.log(answer.join("\n"));
