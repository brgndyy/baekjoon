const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let wArr = [];
let wMap = new Map();
let hArr = [];
let hMap = new Map();

let answer = [];

input.forEach((point) => {
  wArr.push(Number(point.split(" ")[0]));
  hArr.push(Number(point.split(" ")[1]));
});

for (let i = 0; i < wArr.length; i++) {
  wMap.set(wArr[i], wMap.get(wArr[i]) + 1 || 1);
  hMap.set(hArr[i], hMap.get(hArr[i]) + 1 || 1);
}

wMap.forEach((value, key) => value === 1 && answer.push(key));
hMap.forEach((value, key) => value === 1 && answer.push(key));

console.log(answer.join(" "));
