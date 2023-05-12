const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let N = Number(input);

let num = N - 1;
let numArr = [];

while (num > 0) {
  let splitNum = num
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);

  if (num + splitNum === N) {
    numArr.push(num);
    num--;
  } else {
    num--;
  }
}

numArr.length === 0 ? console.log(0) : console.log(Math.min(...numArr));
