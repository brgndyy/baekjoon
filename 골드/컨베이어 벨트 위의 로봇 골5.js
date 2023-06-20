const input = `5 8
100 99 60 80 30 20 10 89 99 100`.split("\n");

let [N, K] = input.shift().split(" ").map(Number);
let arr = input.shift().split(" ").map(Number);
let stage = 0;

function solution(N, K, arr) {
  let robots = Array(arr.length).fill(false);
  let count = 0;

  while (count < K) {
    // Step 1
    stage++;
    arr.unshift(arr.pop());
    robots.unshift(robots.pop());
    // 내리는 위치에 도달한 로봇을 없애기
    if (robots[N - 1]) {
      robots[N - 1] = false;
    }

    // Step 2
    for (let i = N - 1; i > 0; i--) {
      if (!robots[i] && robots[i - 1] && arr[i] > 0) {
        robots[i - 1] = false;
        arr[i]--;
        if (arr[i] === 0) {
          count++;
        }
        if (i !== N - 1) {
          robots[i] = true;
        }
      }
    }

    // Step 3
    if (arr[0] !== 0) {
      arr[0]--;
      if (arr[0] === 0) {
        count++;
      }
      robots[0] = true;
    }
  }
  return stage;
}

console.log(solution(N, K, arr));
