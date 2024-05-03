const input = `3
26 40 83
49 60 57
13 89 99`.split("\n");

const N = Number(input[0]);

let arr = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  arr.push(line);
}

let dp = Array.from({ length: N }, () => Array(3).fill(0));

// dp[i][j]는 i번째 집을 j색으로 칠했을때의 최소 비용
// 1번째 집을 빨강, 초록, 파랑 순서대로 칠했을때의 비용을 담는다.
for (let j = 0; j < 3; j++) {
  dp[0][j] = arr[0][j];
}

for (let i = 1; i < N; i++) {
  // i번째 집에서 초록, 파랑 순서대로 칠했을때 비용 + 기존에 빨간색으로 칠한 비용을 누적시켜준다.
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];

  // i번째 집에서 빨강, 파랑 순서대로 칠했을때 비용 + 기존에 초록색으로 칠한 비용을 누적시켜준다.
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];

  // i번째 집에서 빨강, 초록 순서대로 칠했을때 비용 + 기존에 파랑색으로 칠한 비용을 누적시켜준다.
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
}

console.log(Math.min(...dp[N - 1]));
