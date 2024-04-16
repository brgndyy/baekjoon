const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const arr = input[1].split(" ").map(Number);

const dp = Array(N).fill(0);

dp[0] = arr[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
}

console.log(Math.max(...dp));
