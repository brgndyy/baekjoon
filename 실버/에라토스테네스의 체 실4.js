const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [N, K] = input.split(" ").map((str) => Number(str));

let numArr = Array(N + 1)
  .fill(true)
  .fill(false, 0, 2);
let count = 0;
let answer = 0;

for (let i = 2; i <= N; i++) {
  if (numArr[i]) {
    numArr[i] = false;
    count++;
    if (count === K) {
      answer = i;
      break;
    }
    for (let j = i * i; j <= N; j += i) {
      if (numArr[j]) {
        numArr[j] = false;
        count++;
        if (count === K) {
          answer = j;
          break;
        }
      }
    }
  }
}

console.log(answer);
