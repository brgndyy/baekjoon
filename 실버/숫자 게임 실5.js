const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let answer = [];
let maxNumArr = [];

for (let i = 0; i < N; i++) {
  let cardArr = input[i].split(" ").map((str) => Number(str));
  let maxNum = 0;

  for (let j = 0; j < cardArr.length - 2; j++) {
    for (let k = j + 1; k < cardArr.length - 1; k++) {
      for (let m = k + 1; m < cardArr.length; m++) {
        let sum = (cardArr[j] + cardArr[k] + cardArr[m]) % 10;
        if (sum > maxNum) {
          maxNum = sum;
        }
      }
    }
  }

  maxNumArr.push([i + 1, maxNum]);
}

maxNumArr = maxNumArr.sort((a, b) => {
  if (a[1] === b[1]) {
    return b[0] - a[0];
  } else {
    return b[1] - a[1];
  }
});

console.log(maxNumArr[0][0]);
