const input = `6
6
10
13
9
8
1`
  .split("\n")
  .map(Number);

const N = input.shift();

if (N === 0) {
  console.log(0);
  return;
}

const wines = input;
const dp = Array(N + 1).fill(0);

dp[1] = wines[0];
if (N > 1) {
  dp[2] = wines[0] + wines[1];
}

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 1], // 현재 잔을 마시지 않는 경우
    dp[i - 2] + wines[i - 1], // 바로 이전 잔을 마시지 않고 현재 잔을 마시는 경우
    dp[i - 3] + wines[i - 2] + wines[i - 1] // 연속된 두 잔을 마시고, 그 이전 잔은 마시지 않는 경우
  );
}

console.log(dp[N]);
