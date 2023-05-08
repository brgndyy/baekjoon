const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let shiftArr = input.shift();

let [N, M] = [Number(shiftArr.split(" ")[0]), Number(shiftArr.split(" ")[1])];

let filterInputArr = input.filter((str) => str.length >= M);

let strMap = new Map();

let answer = [];

filterInputArr.forEach((str) => strMap.set(str, strMap.get(str) + 1 || 1));

// 1번 조건
let modeStrs = [...strMap]
  .sort((a, b) => b[1] - a[1])
  .filter((arr) => arr[1] > 1);

modeStrs.forEach((arr) => answer.push(arr[0]));

// 2번 조건

let someStrs = [...strMap]
  .filter((arr) => arr[1] === 1)
  .sort((a, b) => b[0].length - a[0].length);

let filterSomeStrs = someStrs
  .filter((arr) => arr[0].length === someStrs[0][0].length)
  .sort()
  .forEach((str) => answer.push(str[0]));

// 3번 조건

let threeArr = someStrs
  .filter((arr) => arr[0].length < someStrs[0][0].length)
  .sort()
  .forEach((str) => answer.push(str[0]));

console.log(answer.join("\n"));
