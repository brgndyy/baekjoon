const input = `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`.split("\n");

const N = Number(input[0]);

const MAX = 15;

const dp = Array(MAX).fill(0);

const arr = Array.from({ length: MAX }, () => []);

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);

  arr[i] = line;
}

for (let i = 1; i <= N; i++) {
  const [day, price] = arr[i];
  // 현재 날짜에서 상담을 시작했을때 N의 범위를 넘지 않는다면
  if (i + day - 1 <= N) {
    dp[i + day] = Math.max(dp[i + day], dp[i] + price); // 상담을 마치는 날에 수익을 업데이트
  }

  // 오늘 상담을 시작하지 않을 경우
  dp[i + 1] = Math.max(dp[i + 1], dp[i]); // 다음 날의 수익을 현재까지의 최대 수익으로 설정
}

console.log(Math.max(...dp));
