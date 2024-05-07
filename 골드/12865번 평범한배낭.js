const input = `4 7
6 13
4 8
3 6
5 12`.split("\n");

const [N, K] = input[0].split(" ").map(Number);

// 물건 정보를 담는 배열과 DP 테이블 초기화
const items = [];
const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const [W, V] = input[i].split(" ").map(Number);
  items.push([W, V]); // 물건의 무게와 가치를 저장
}

// DP로 최대 가치 계산
for (let i = 1; i <= N; i++) {
  const [weight, value] = items[i - 1]; // 물건 정보 가져오기
  for (let j = 0; j <= K; j++) {
    if (j < weight) {
      // 현재 물건을 배낭에 넣을 수 없는 경우
      dp[i][j] = dp[i - 1][j];
    } else {
      // 현재 물건을 배낭에 넣을 수 있는 경우
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
    }
  }
}

// 결과 출력
console.log(dp[N][K]);
