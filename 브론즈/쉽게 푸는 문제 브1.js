const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [A, B] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];

let numArr = [];
let count = 1;
let answer = 0;

while (numArr.length <= 1000) {
  for (let i = 1; i <= count; i++) {
    numArr.push(count);
  }

  count++;
}

for (let j = A - 1; j <= B - 1; j++) {
  answer += numArr[j];
}

console.log(answer);
