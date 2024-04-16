const input = `3
2 2
1 5
13 29`.split("\n");

const T = Number(input[0]);

const max = 30;
const dp = Array.from({ length: max + 1 }, () => Array(max + 1).fill(0));

// 맨 왼쪽, 맨 오른쪽은 무조건 1로 초기화
for (let i = 0; i <= max; i++) {
  dp[i][0] = 1;
  dp[i][i] = 1;
}

// 가장 자리를 제외한 중간 부분을 계산해주기 (끝부분은 0으로 초기화가 됐기 때문에 j < i)
for (let i = 2; i <= max; i++) {
  for (let j = 1; j < i; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}

// 각 테스트 케이스에 대해 결과 출력
for (let t = 1; t <= T; t++) {
  const [N, M] = input[t].split(" ").map(Number);
  console.log(dp[M][N]);
}
// 여기서 dp[i][j]는 i개의 아이템 중에서 j개를 선택할수 있는 경우의 수
// 그래서 M개 중에서 N개를 선택할수 있는 경우의 수를 골라야함
