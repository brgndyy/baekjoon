const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

let answer = "";

let ballsArr = Array.from({ length: N }, (_, index) => index + 1);

for (let i = 1; i <= M; i++) {
  let numOne = Number(input[i].split(" ")[0]) - 1; // 0
  let numTwo = Number(input[i].split(" ")[1]) - 1; // 3

  let sliceNumOne = ballsArr.slice(numOne, numOne + 1); // [1]
  let sliceNumTwo = ballsArr.slice(numTwo, numTwo + 1); // [4]

  ballsArr.splice(numOne, 1, ...sliceNumTwo);
  ballsArr.splice(numTwo, 1, ...sliceNumOne);
}

ballsArr.forEach((num) => (answer += num + " "));

console.log(answer.trim());
