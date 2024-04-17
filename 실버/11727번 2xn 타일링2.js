const input = `4`;

const N = Number(input);

let dp = [0, 1, 3];

for (let i = 3; i <= N; i++) {
  dp[i] = (2 * dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[N]);
