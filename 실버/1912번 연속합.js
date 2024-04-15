const input = `5
-1 -2 -3 -4 -5`.split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);
const dp = Array(N).fill(0);

dp[0] = arr[0];
let maxSum = dp[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);

  maxSum = Math.max(maxSum, dp[i]);
}

console.log(maxSum);
