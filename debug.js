const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let [N, M, R] = input
    .shift()
    .split(" ")
    .map((str) => Number(str));

  let board = input.map((str) => str.split(" ").map((str) => Number(str)));

  // 6 x 8 배열일때  3번, 6 x 6 배열일때도 3번, N과 M중에 가장 작은수를 2번으로 나눈 수만큼 회전수가 정해짐

  let rotateNum = Math.min(N, M) / 2;
  let minusNum = 0;

  for (let j = 0; j < R; j++) {
    for (let i = 0; i < rotateNum; i++) {
      let num = i;
      rotate(num, minusNum);
      minusNum++;
    }
    minusNum = 0;
  }

  function rotate(num, minusNum) {
    let startX = num; // 0
    let endX = N - 1 - minusNum; // 3

    let startY = num; // 0
    let endY = M - 1 - minusNum; // 3

    let temp = board[startX][startY];

    // 맨윗줄라인을 서쪽방향으로 옮기기

    for (let i = startY; i <= endY - 1; i++) {
      board[startX][i] = board[startX][i + 1];
    }

    // 동쪽라인을 북쪽방향으로 옮기기

    for (let j = startX; j <= endX - 1; j++) {
      board[j][endY] = board[j + 1][endY];
    }

    // 맨밑쪽라인을 동쪽방향으로 옮기기

    for (let k = endY; k > startY; k--) {
      board[endX][k] = board[endX][k - 1];
    }

    // 서쪽라인을 밑으로 내리기

    for (let m = endX; m > startX; m--) {
      board[m][startY] = board[m - 1][startY];
    }

    board[num + 1][num] = temp;
  }

  let answer = "";

  board.map((arr) => (answer += arr.join(" ") + "\n"));

  return answer.trim();
}

console.log(solution(input));
