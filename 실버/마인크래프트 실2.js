const input = `3 4 1
64 64 64 64
64 64 64 64
64 64 64 63`.split("\n");

let [N, M, B] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
let blockArr = input.map((arr) => arr.split(" ").map((str) => Number(str)));
let maxHeight = 256;

function getTime(height) {
  let blockNum = B;
  let remove = 0;
  let add = 0;
  let time = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (blockArr[i][j] > height) {
        remove += blockArr[i][j] - height;
        blockNum += blockArr[i][j] - height;
      } else if (blockArr[i][j] < height) {
        add += height - blockArr[i][j];
        blockNum -= height - blockArr[i][j];
      }
      time = remove * 2 + add;
    }
  }

  if (blockNum < 0) {
    return [Number.MAX_SAFE_INTEGER, height];
  }

  return [time, height];
}

const answer = [];

for (let i = maxHeight; i >= 0; i--) {
  answer.push(getTime(i));
}

answer.sort((a, b) => {
  if (a[0] === b[0]) {
    return b[1] - a[1];
  } else {
    return a[0] - b[0];
  }
});

console.log(answer[0].join(" "));
