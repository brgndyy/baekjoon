const input = `3
4
7
10`.split("\n");

const T = Number(input[0]);

let answer = "";

for (let i = 1; i <= T; i++) {
  let N = Number(input[i]);

  let dp = Array(N + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let j = 4; j <= N; j++) {
    dp[j] = dp[j - 3] + dp[j - 2] + dp[j - 1];
  }

  answer += dp[N] + "\n";
}

console.log(answer.trim());
