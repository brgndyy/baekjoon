const input = `6 7 2
.......
...O...
....O..
.......
OO.....
OO.....`.split("\n");

let [R, C, N] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let board = input.map((line) => line.split(""));

let bombTime = Array.from({ length: R }, () => Array(C).fill(0));

let dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === "O") {
      bombTime[i][j] = 3;
    }
  }
}

let time = 1;

while (time <= N) {
  if (time % 2 === 0) {
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (board[i][j] === ".") {
          board[i][j] = "O";
          bombTime[i][j] = time + 3;
        }
      }
    }
  } else {
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (bombTime[i][j] === time) {
          board[i][j] = ".";
        }

        for (let k = 0; k < 4; k++) {
          let nx = i + dir[k][0];
          let ny = j + dir[k][1];

          if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
            continue;
          }

          if (board[nx][ny] === "O" && bombTime[nx][ny] !== time) {
            board[nx][ny] = ".";
            bombTime[nx][ny] = 0;
          }
        }
      }
    }
  }

  time++;
}

console.log(board);
