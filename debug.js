const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let colorMap = new Map();
let numMap = new Map();
let answer = 0;

let colorAndNumArr = input
  .map((str) => [str.split(" ")[0], Number(str.split(" ")[1])])
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      if (a[0] > b[0]) {
        return 1;
      } else {
        return -1;
      }
    }
  });

for (let i = 0; i < colorAndNumArr.length; i++) {
  let [color, num] = colorAndNumArr[i];

  colorMap.set(color, colorMap.get(color) + 1 || 1);
  numMap.set(num, numMap.get(num) + 1 || 1);
}

let numMapArr = [...numMap];
let twoMinusSet = new Set();
let sevenArr = [];

if (colorMap.size === 1) {
  let numArr = [...numMap];
  let minusSet = new Set();

  for (let i = 0; i < numArr.length - 1; i++) {
    minusSet.add(numArr[i][0] - numArr[i + 1][0]);
  }

  if (minusSet.size === 1) {
    console.log(numArr[0][0] + 900);
    return;
  } else {
    console.log(numArr[0][0] + 600);
    return;
  }
}

for (let i = 0; i < numMapArr.length; i++) {
  let count = numMapArr[i][1];

  if (count === 4) {
    console.log(numMapArr[i][0] + 800);
    return;
  }
}

if (numMapArr[0][1] === 3 && numMapArr[1][1] === 2) {
  let sum = numMapArr[0][0] * 10 + numMapArr[1][0] + 700;
  console.log(sum);
  return;
} else if (numMapArr[0][1] === 2 && numMapArr[1][1] === 3) {
  let sum = numMapArr[1][0] * 10 + numMapArr[0][0] + 700;
  console.log(sum);
  return;
}

for (let j = 0; j < numMapArr.length - 1; j++) {
  twoMinusSet.add(numMapArr[j][0] - numMapArr[j + 1][0]);
}

if (twoMinusSet.size === 1) {
  console.log(numMapArr[0][0] + 500);
  return;
}

for (let i = 0; i < numMapArr.length; i++) {
  if (numMapArr[i][1] === 2) {
    sevenArr.push(numMapArr[i]);
  }
}

if (sevenArr.length === 2) {
  if (sevenArr[0][0] > sevenArr[1][0]) {
    let sum = sevenArr[0][0] * 10 + sevenArr[1][0] + 300;
    console.log(sum);
    return;
  } else {
    let sum = sevenArr[1][0] * 10 + sevenArr[0][0] + 300;
    console.log(sum);
    return;
  }
}

if (sevenArr.length === 1) {
  let sum = sevenArr[0][0] + 200;
  console.log(sum);
  return;
}

for (let i = 0; i < numMapArr.length; i++) {
  if (numMapArr[i][1] === 3) {
    console.log(numMapArr[i][0] + 400);
    return;
  }
}

console.log(numMapArr[0][0] + 100);
