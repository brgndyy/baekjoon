const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";

for (let i = 0; i < input.length - 1; i++) {
  let num = Number(input[i]);
  let measureArr = [];

  for (let j = 1; j <= Math.floor(num / 2); j++) {
    if (num % j === 0) {
      measureArr.push(j);
    }
  }

  if (measureArr.reduce((a, b) => a + b, 0) === num) {
    answer += num + " = ";
    answer += measureArr.join(" + ") + "\n";
  } else {
    answer += num + " is NOT perfect." + "\n";
  }
}

console.log(answer.trim());
