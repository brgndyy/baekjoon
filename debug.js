const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
let board = input.map((arr) => arr.split("").map((str) => Number(str)));

let maxWidth = [1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let point = board[i][j];

    for (let z = j + 1; z < M; z++) {
      if (point === board[i][z]) {
        let minusNum = z - j;

        if (
          i + minusNum < N &&
          point === board[i + minusNum][j] &&
          point === board[i + minusNum][z]
        ) {
          maxWidth.push((minusNum + 1) * (minusNum + 1));
        }
      }
    }
  }
}

console.log(Math.max(...maxWidth));
