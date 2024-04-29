const input = `6
6
10
13
9
8
1`
  .split("\n")
  .map(Number);

const N = Number(input[0]);

const dp = Array(N + 1).fill(0);

dp[1] = input[1];

if (N >= 2) {
  dp[2] = input[1] + input[2];
}

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i],
    dp[i - 2] + input[i],
    dp[i - 3] + input[i - 1] + input[i]
  );
}

console.log(dp);
