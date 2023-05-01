const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let decArr = [];
let answer = "";

for (let i = num1; i <= num2; i++) {
  let arr = [];

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      arr.push(j);
    }
  }

  if (arr.length === 2) {
    decArr.push(i);
  }
}

if (decArr.length === 0) {
  console.log(-1);
} else {
  answer += decArr.reduce((a, b) => a + b, 0) + "\n";
  answer += decArr[0];
  console.log(answer);
}
