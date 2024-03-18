const input = `10`;

let N = Number(input);

const dp = new Array(N + 1).fill(0);
// dp[i]는 숫자 i를 1로 만드는데 필요한 최소 연산 횟수

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);

  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}

console.log(dp[N]);
