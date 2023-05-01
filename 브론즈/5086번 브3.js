const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";

for (let i = 0; i < input.length - 1; i++) {
  let [frontNum, backNum] = [
    Number(input[i].split(" ")[0]),
    Number(input[i].split(" ")[1]),
  ];

  if (frontNum % backNum === 0) {
    answer += "multiple" + "\n";
  } else if (backNum % frontNum === 0) {
    answer += "factor" + "\n";
  } else {
    answer += "neither" + "\n";
  }
}

console.log(answer.trim());

console.log(answer.trim());
