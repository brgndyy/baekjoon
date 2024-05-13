const input = `5 3 2
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0`.split("\n");

const [N, M, H] = input.shift().split(" ").map(Number);

const boxes = Array.from({ length: H }, () =>
  Array.from({ length: M }, () => Array(N).fill(0))
);

let queue = [];

const directions = [
  [1, 0, 0], // 윗층
  [-1, 0, 0], // 아랫층
  [0, 1, 0], // 앞
  [0, -1, 0], // 뒤
  [0, 0, 1], // 오
  [0, 0, -1], // 왼
];

let days = 0;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < M; j++) {
    boxes[i][j] = input.shift().split(" ").map(Number);

    for (let k = 0; k < N; k++) {
      if (boxes[i][j][k] === 1) {
        queue.push([i, j, k, 0]);
      }
    }
  }
}

while (queue.length) {
  const [df, dw, dh, day] = queue.shift();
  days = day;

  for (let i = 0; i < 6; i++) {
    const nf = df + directions[i][0];
    const nw = dw + directions[i][1];
    const nh = dh + directions[i][2];

    if (
      nf >= 0 &&
      nf < H &&
      nw >= 0 &&
      nw < M &&
      nh >= 0 &&
      nh < N &&
      boxes[nf][nw][nh] === 0
    ) {
      boxes[nf][nw][nh] = 1;
      queue.push([nf, nw, nh, day + 1]);
    }
  }
}

let allRipe = true;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < N; k++) {
      if (boxes[i][j][k] === 0) {
        allRipe = false;
        break;
      }
    }
  }
}

if (allRipe) {
  console.log(days);
} else {
  console.log(-1);
}
