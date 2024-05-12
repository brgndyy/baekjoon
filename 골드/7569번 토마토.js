const input = `5 3 1
0 -1 0 0 0
-1 -1 0 1 1
0 0 0 1 1`.split("\n");

const [M, N, H] = input.shift().split(" ").map(Number); // 가로, 세로, 높이

const boxes = Array.from(Array(H), () =>
  Array.from(Array(N), () => Array.from(Array(M).fill(0)))
);

const queue = [];

const directions = [
  [1, 0, 0], // 윗층
  [-1, 0, 0], // 아랫층
  [0, 1, 0], // 앞쪽
  [0, -1, 0], // 뒤쪽
  [0, 0, 1], // 오른쪽
  [0, 0, -1], // 왼쪽
];

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    boxes[i][j] = input.shift().split(" ").map(Number);
    for (let k = 0; k < M; k++) {
      if (boxes[i][j][k] === 1) {
        queue.push([i, j, k, 0]);
      }
    }
  }
}

let days = 0;

while (queue.length > 0) {
  const [h, r, c, day] = queue.shift();
  days = day;

  for (const [dh, dr, dc] of directions) {
    const nh = h + dh;
    const nr = r + dr;
    const nc = c + dc;

    if (
      nh >= 0 &&
      nh < H &&
      nr >= 0 &&
      nr < N &&
      nc >= 0 &&
      nc < M &&
      boxes[nh][nr][nc] === 0
    ) {
      boxes[nh][nr][nc] = 1;
      queue.push([nh, nr, nc, day + 1]);
    }
  }
}

let allRipe = true;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
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
