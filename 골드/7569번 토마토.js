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

const queue = [];
const directions = [
  [1, 0, 0], // 윗층
  [-1, 0, 0], // 아랫층
  [0, 1, 0], // 앞
  [0, -1, 0], // 뒤
  [0, 0, 1], // 오
  [0, 0, -1], // 왼
];

let days = 0;

// 입력 데이터 처리
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

// 큐를 위한 덱 사용
class Deque {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  push(value) {
    this.data[this.tail++] = value;
  }

  shift() {
    if (this.size() === 0) return undefined;
    const value = this.data[this.head];
    delete this.data[this.head];
    this.head++;
    return value;
  }

  size() {
    return this.tail - this.head;
  }
}

const deque = new Deque();
queue.forEach((item) => deque.push(item));

while (deque.size()) {
  const [df, dw, dh, day] = deque.shift();
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
      deque.push([nf, nw, nh, day + 1]);
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

console.log(allRipe ? days : -1);
