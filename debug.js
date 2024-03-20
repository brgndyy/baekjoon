const input = `3
4
7
10`.split("\n");

const testCase = Number(input[0]);

for (let i = 1; i < input.length; i++) {
  let N = Number(input[i]);

  let dp = Array(N + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  console.log(dp[N]);
}
