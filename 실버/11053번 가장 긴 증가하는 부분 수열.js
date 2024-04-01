const input = `6
20 20 10 30 20 50`.split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const dp = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

const maxLIS = Math.max(...dp);
console.log(maxLIS);
