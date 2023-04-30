const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let answer = "";
  let splitInput = input[i].split("");
  answer += splitInput[0];
  answer += splitInput[splitInput.length - 1];

  console.log(answer);
}
