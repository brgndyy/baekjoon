const input = `3
2 2
1 5
13 29`.split("\n");

const T = Number(input[0]);

const MAX = 30;

const dp = Array.from({ length: MAX + 1 }, () => Array(MAX + 1).fill(0));

for (let i = 0; i <= MAX; i++) {
  dp[i][i] = 1;
  dp[i][0] = 1;
}

for (let i = 2; i <= MAX; i++) {
  for (let j = 1; j < i; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}

console.log(dp);
