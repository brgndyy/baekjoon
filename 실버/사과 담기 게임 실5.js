const input = `5 1
3
1
5
3`.split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
let j = Number(input.shift());
let basketStartIdx = 0; // 바구니의 시작 위치
let count = 0;

for (let i = 0; i < j; i++) {
  let appleDropIdx = Number(input[i]) - 1; // 사과가 떨어지는 위치

  // 사과가 바구니의 범위 내에 떨어지지 않는 경우
  if (appleDropIdx < basketStartIdx || appleDropIdx >= basketStartIdx + M) {
    // 사과가 바구니의 왼쪽 범위 밖에 떨어지는 경우
    if (appleDropIdx < basketStartIdx) {
      count += basketStartIdx - appleDropIdx;
      basketStartIdx = appleDropIdx; // 바구니의 위치 업데이트
    }
    // 사과가 바구니의 오른쪽 범위 밖에 떨어지는 경우
    else if (appleDropIdx >= basketStartIdx + M) {
      count += appleDropIdx - (basketStartIdx + M - 1);
      basketStartIdx = appleDropIdx - M + 1; // 바구니의 위치 업데이트
    }
  }
}

console.log(count);
