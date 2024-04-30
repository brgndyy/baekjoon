const input = `3`;

const N = Number(input);

const MAX = 90;

const dp = Array(MAX + 1).fill(0);

dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= MAX; i++) {
  dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
}

console.log(dp[N]);
