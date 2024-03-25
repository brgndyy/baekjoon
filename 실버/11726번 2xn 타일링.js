const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input[0]);

let dp = Array(1001).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[N]);
