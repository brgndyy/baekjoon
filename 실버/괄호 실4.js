const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let answer = [];

for (let i = 1; i <= T; i++) {
  let splitInput = input[i].split("()").join("");
  while (splitInput.includes("()")) {
    splitInput = splitInput.split("()").join("");
  }

  splitInput.length === 0 ? answer.push("YES") : answer.push("NO");
}

console.log(answer.join("\n"));
