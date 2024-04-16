const input = `3
2 2
1 5
13 29`.split("\n");

const T = Number(input[0]);

// DP 테이블 생성 및 초기화
const max = 30;
const dp = Array.from({ length: max + 1 }, () => Array(max + 1).fill(0));

// 기본 조합 설정
for (let i = 0; i <= max; i++) {
  dp[i][0] = 1;
  dp[i][i] = 1;
}

console.log(dp);

// 조합 값 계산 (파스칼의 삼각형)
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
