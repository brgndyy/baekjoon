const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = [];

let [R, C] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let board = input.map((str) => str.split(""));
let copyBoard = [...board];

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    let count = 0;

    if (board[i][j] === "X") {
      for (let k = 0; k < 4; k++) {
        let nx = i + dir[k][0];
        let ny = j + dir[k][1];

        if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
          count++;
        } else if (board[nx][ny] === ".") {
          count++;
        }
      }

      if (count >= 3) {
        board[i][j] = "O";
      }
    }
  }
}

for (let i = 0; i < R; i++) {
  let boardLine = board[i].join("");

  if (!boardLine.includes("X")) {
    continue;
  } else {
    answer.push(board[i]);
  }
}

while (true) {
  let frontStr = "";
  let backStr = "";

  for (let i = 0; i < answer.length; i++) {
    frontStr += answer[i][0];
  }

  if (!frontStr.includes("X")) {
    for (let i = 0; i < answer.length; i++) {
      answer[i].shift();
    }
  } else {
    frontStr = "";
  }

  for (let i = 0; i < answer.length; i++) {
    backStr += answer[i][answer[i].length - 1];
  }

  if (!backStr.includes("X")) {
    for (let i = 0; i < answer.length; i++) {
      answer[i].pop();
    }
  } else {
    backStr = "";
  }

  if (frontStr.length === 0 && backStr.length === 0) {
    break;
  }
}

for (let i = 0; i < answer.length; i++) {
  for (let j = 0; j < answer[i].length; j++) {
    if (answer[i][j] === "O") {
      answer[i][j] = ".";
    }
  }

  answer[i] = answer[i].join("");
}

console.log(answer.join("\n"));
