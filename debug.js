const input = `6
20 20 10 30 20 50`.split("\n");

const N = Number(input[0]);

const arr = input[1].split(" ").map(Number);

const dp = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      // 여기서 dp[i]는 `i`번째 요소까지 고려했을때 가장 긴 증가하는 수열을 저장
      // dp[j]는 arr[j]를 마지막으로 하는 가장 긴 증가하는 부분 수열의 길이
      // Math.max(dp[i], dp[j] + 1)의 의미
      // 이 부분은 dp[i]의 현재 값(이전에 계산된 값)과 새로 계산된 값(dp[j] + 1) 중 더 큰 값을 dp[i]에 저장
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
