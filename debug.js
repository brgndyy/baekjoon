const input = `3
26 40 83
49 60 57
13 89 99`.split("\n");

const N = Number(input[0]);

const arr = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);

  arr.push(line);
}

const dp = Array.from({ length: N }, () => Array(3).fill(0));

for (let i = 0; i < N; i++) {
  dp[0][i] = arr[0][i];
}

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];

  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];

  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
}

console.log(Math.min(...dp[N - 1]));
