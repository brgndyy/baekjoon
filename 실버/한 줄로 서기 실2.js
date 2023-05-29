const input = `7
6 1 1 1 2 0 0`.split("\n");

let N = Number(input.shift());
let arr = input[0].split(" ").map((str) => Number(str));
let answer = Array(N).fill(0); // 줄을 서는 순서를 저장할 배열

for (let i = 1; i <= N; i++) {
  let cnt = arr[i - 1];
  for (let j = 0; j < N; j++) {
    if (cnt === 0 && answer[j] === 0) {
      answer[j] = i;
      break;
    } else if (answer[j] === 0) {
      cnt -= 1;
    }
  }
}

console.log(answer.join(" ")); // 줄을 선 순서를 출력
