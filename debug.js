const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let maxLength = 0;

let splitInput = input.map((str) => str.split(""));
let answer = "";

splitInput.forEach((arr) => {
  if (arr.length > maxLength) {
    maxLength = arr.length;
  }
});

for (let i = 0; i < splitInput.length; i++) {
  if (splitInput[i].length < maxLength) {
    while (splitInput[i].length < maxLength) {
      splitInput[i].push("");
    }
  }
}

for (let i = 0; i < splitInput[0].length; i++) {
  for (let j = 0; j < splitInput.length; j++) {
    answer += splitInput[j][i];
  }
}

console.log(answer);
