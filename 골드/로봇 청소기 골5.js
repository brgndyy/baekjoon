const input = `3 3
1 1 0
1 1 1
1 0 1
1 1 1`.split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
let [r, c, d] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
let board = input.map((str) => str.split(" ").map((str) => Number(str)));

let count = 0;

let dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

while (true) {
  let isClean = false;

  if (board[r][c] === 0) {
    board[r][c] = 2; // 청소한 위치는 2로 변경
    count++;
  }

  for (let i = 0; i < 4; i++) {
    d = (d + 3) % 4; // 왼쪽 방향으로 회전
    let nx = r + dir[d][0];
    let ny = c + dir[d][1];

    if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
      if (board[nx][ny] === 0) {
        // 청소하지 않은 칸이 있다면 전진
        r = nx;
        c = ny;
        isClean = true;
        break;
      }
    }
  }

  if (!isClean) {
    // 청소할 칸이 없다면 후진 시도
    let nd = (d + 2) % 4; // 후진하는 방향
    let nx = r + dir[nd][0];
    let ny = c + dir[nd][1];

    if (board[nx][ny] === 1) {
      // 후진할 칸이 벽이라면 종료
      break;
    } else {
      // 후진 가능
      r = nx;
      c = ny;
    }
  }
}
console.log(count);
