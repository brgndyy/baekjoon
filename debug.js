const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input.map((arr) => arr.split(" ").map((str) => Number(str)));

let totalArr = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 0; i < arr.length; i++) {
  // [1, 2]

  let [oneX, oneY] = [arr[i][0], arr[i][1]];
  // [4, 4]
  let [twoX, twoY] = [arr[i][2], arr[i][3]];

  for (let j = oneX; j < twoX; j++) {
    for (let k = oneY; k < twoY; k++) {
      totalArr[k][j] += 1;
    }
  }
}

let count = 0;

for (let i = 0; i < totalArr.length; i++) {
  for (let j = 0; j < totalArr[i].length; j++) {
    if (totalArr[i][j] >= 1) {
      count++;
    }
  }
}

console.log(count);
