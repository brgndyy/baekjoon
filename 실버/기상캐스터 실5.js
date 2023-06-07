const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [H, W] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let board = input.map((arr) => arr.split(""));
let answer = [];

for (let i = 0; i < H; i++) {
  let lineArr = [];
  let count = -1;

  for (let j = 0; j < W; j++) {
    if (count === -1 && board[i][j] === ".") {
      lineArr.push(count);
    } else if (count >= 0 && board[i][j] === ".") {
      count++;
      lineArr.push(count);
    } else if (board[i][j] === "c") {
      count = 0;
      lineArr.push(count);
    }
  }

  answer.push(lineArr.join(" "));
}

console.log(answer.join("\n"));
