const input = `11 10
7 4 0
1 1 1 1 1 1 1 1 1 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 1 1 1 1 0 1
1 0 0 1 1 0 0 0 0 1
1 0 1 1 0 0 0 0 0 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 0 0 0 1
1 1 1 1 1 1 1 1 1 1`.split("\n");

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

board[r][c] = 2;
count++;
let isClean = false;

while (true) {
  for (let i = 0; i < 4; i++) {
    let nx = r + dir[d][0];
    let ny = c + dir[d][1];

    if (nx >= 0 && ny >= 0 && nx < N && ny < M && board[nx][ny] === 0) {
      r = nx;
      c = ny;
      board[r][c] = 2;
      count++;
      isClean = true;
      break;
    } else if (nx < 0 || ny < 0 || nx <= N || ny <= M || board[nx][ny] !== 1) {
      d = (d + 3) % 4;
    }
  }

  if (isClean === false) {
    d = Math.abs(d - 2);

    let nx = r + dir[d][0];
    let ny = c + dir[d][1];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M || board[nx][ny] === 1) {
      break;
    }
  }
}

console.log(count);
