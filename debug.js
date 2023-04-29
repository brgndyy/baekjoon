const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]); // 4

let ballsArr = Array(N).fill(0);
let answer = "";

for (let i = 1; i <= M; i++) {
  const startIndex = Number(input[i].split(" ")[0]) - 1; // 2
  const changeBallNum = Number(input[i].split(" ")[1]) - startIndex; // 3
  const fillBallNum = Number(input[i].split(" ")[1]) - startIndex + 1; // 2
  let ballNum = []; // [3]

  for (let j = 1; j < fillBallNum; j++) {
    ballNum.push(Number(input[i].split(" ")[2]));
  }

  ballsArr.splice(startIndex, changeBallNum, ...ballNum);
}

ballsArr.forEach((num) => (answer += num + " "));

console.log(answer.trim());
