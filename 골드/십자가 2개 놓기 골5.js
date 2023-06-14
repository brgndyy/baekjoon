const input = `6 6
.#..#.
######
.#..#.
######
.#..#.
.#..#.`.split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let board = input.map((str) => str.split(""));
let crossBoard = Array.from({ length: N }, () => Array(N).fill(0));

let dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let answer = [1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === "#") {
      let crossFlag = true;

      for (let m = 0; m < 4; m++) {
        let nx = i + dir[m][0];
        let ny = j + dir[m][1];

        if (nx < 0 || ny < 0 || nx >= N || ny >= M || board[nx][ny] !== "#") {
          crossFlag = false;
        }

        if (m === 0) {
          nx--;

          if (board[nx][ny] === "*") {
            crossFlag = false;
          }
        } else if (m === 1) {
          ny++;
          if (board[nx][ny] === "*") {
            crossFlag = false;
          }
        } else if (m === 2) {
          nx++;
          if (board[nx][ny] === "*") {
            crossFlag = false;
          }
        } else if (m === 3) {
          ny--;
          if (board[nx][ny] === "*") {
            crossFlag = false;
          }
        }
      }
      // 십자가 모형이 갖춰진다면
      if (crossFlag) {
        board[i][j] = "*";

        for (let m = 0; m < 4; m++) {
          let nx = i + dir[m][0];
          let ny = j + dir[m][1];

          board[nx][ny] = "*";
        }
      }
    }
  }
}

console.log(board);
