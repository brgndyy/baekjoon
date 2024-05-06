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
const wine = Array(N + 1);

for (let i = 1; i <= N; i++) {
  wine[i] = input[i];
}

if (N > 0) dp[1] = wine[1];
if (N > 1) dp[2] = wine[1] + wine[2];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 3] + wine[i - 1] + wine[i],
    dp[i - 2] + wine[i],
    dp[i - 1]
  );
}

console.log(Math.max(...dp));
