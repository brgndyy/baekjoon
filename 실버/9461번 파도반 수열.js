const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0];

const MAX = 100;

const dp = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

for (let i = 10; i <= MAX; i++) {
  const targetNumber = dp[i - 3] + dp[i - 2];

  dp.push(targetNumber);
}

for (let i = 1; i <= T; i++) {
  console.log(dp[input[i] - 1]);
}
