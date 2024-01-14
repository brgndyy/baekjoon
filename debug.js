const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let answer = 0;

while (N > 0) {
  if (N % 5 === 0) {
    answer += N / 5;
    N = N - (N / 5) * 5;
  }

  if (N <= 0) {
    break;
  }

  N -= 3;

  answer++;
}

console.log(N < 0 ? -1 : answer);
