const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let numArr = input.map((str) => Number(str));
let answer = [];

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 0; i < numArr.length - 1; i++) {
  let count = 0;

  for (let j = numArr[i] + 1; j <= numArr[i] * 2; j++) {
    if (isPrime(j)) {
      count++;
    }
  }

  answer.push(count);
}

console.log(answer.join("\n"));
