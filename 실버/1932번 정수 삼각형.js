const input = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`.split("\n");

const N = parseInt(input[0], 10);
const triangle = input.slice(1).map((line) => line.split(" ").map(Number));

// dp[i][j]는 삼각형의 i번째 층 j번째 위치에 도달했을 때, 가능한 최대 합을 저장

const dp = Array.from(Array(N), () => Array(N).fill(0));
dp[0][0] = triangle[0][0]; // 여기서 i,j는 i와 j에 도달했을때의 최댓값

for (let i = 1; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    dp[i][j] =
      triangle[i][j] +
      // 왼쪽 위에서 내려오는 경우와 바로 내려오는 경우가 나뉘어진다
      Math.max(j > 0 ? dp[i - 1][j - 1] : 0, j < i ? dp[i - 1][j] : 0);
  }
}

console.log(dp);
