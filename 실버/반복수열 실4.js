const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [A, P] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];

let numArr = [];

numArr.push(A);
let flag = true;

while (flag) {
  let nextNum = numArr[numArr.length - 1];
  let sum = 0;
  let splitNum = nextNum.toString().split("");

  for (let i = 0; i < splitNum.length; i++) {
    let one = Number(splitNum[i]);
    let num = 1;

    for (let j = 1; j <= P; j++) {
      num *= one;
    }

    sum += num;
  }

  if (!numArr.includes(sum)) {
    numArr.push(sum);
  } else {
    numArr.splice(numArr.indexOf(sum));
    flag = false;
    break;
  }
}

console.log(numArr.length);
