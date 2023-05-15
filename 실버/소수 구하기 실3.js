const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [startNum, endNum] = [
  Number(input.split(" ")[0]),
  Number(input.split(" ")[1]),
];

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

for (let i = startNum; i <= endNum; i++) {
  if (isPrime(i)) {
    answer.push(i);
  }
}

console.log(answer.join("\n"));
