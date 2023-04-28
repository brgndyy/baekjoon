const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

let ballsArr = Array.from({ length: N }, (_, index) => index + 1);
let answer = "";

for (let i = 1; i < input.length; i++) {
  let firstNum = Number(input[i].split(" ")[0]) - 1;
  let secondNum = Number(input[i].split(" ")[1]);

  let sliceArr = ballsArr.slice(firstNum, secondNum).reverse();

  ballsArr.splice(firstNum, secondNum - firstNum, ...sliceArr);
}

ballsArr.forEach((num) => {
  return (answer += num + " ");
});

console.log(answer.trim());
