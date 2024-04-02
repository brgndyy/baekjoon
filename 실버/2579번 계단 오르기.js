const input = `6
10
20
15
100
10
20`
  .split("\n")
  .map(Number);

const N = input[0];

let dp = Array(N + 1).fill(0);

dp[1] = input[1];

if (N >= 2) {
  dp[2] = input[1] + input[2];
}

for (let i = 3; i <= N; i++) {
  // 현재 계단 i를 밟았을 때 얻을 수 있는 최대 점수
  // 두 가지 경우 중 최대값을 선택
  // 1. 두 계단 전에서 현재 계단으로 직접 오는 경우
  // 2. 세 계단 전과 이전 계단을 거쳐 현재 계단으로 오는 경우
  dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
}

console.log(dp[N]);
