const input = `4 2 0 0 8
0 2
3 4
5 6
7 8
4 4 4 1 3 3 3 2`.split("\n");

let [N, M, x, y, K] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let moveDirArr = input
  .pop()
  .split(" ")
  .map((str) => Number(str));

let map = input.map((str) => str.split(" ").map((str) => Number(str)));

let dicePos = [x, y];
// 맨 윗면, 맨 아랫면, 동, 서, 남, 북 방향
let dice = [0, 0, 0, 0, 0, 0];
let dirArr = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let answer = [];

for (let i = 0; i < moveDirArr.length; i++) {
  // 남쪽, 방향이 남쪽일땐 dice의 [4]가 움직임
  if (moveDirArr[i] === 4) {
  }

  // 북쪽
  else if (moveDirArr[i] === 3) {
  }
  // 서쪽
  else if (moveDirArr[i] === 2) {
  }
  // 동쪽
  else if (moveDirArr[i] === 1) {
  }
}
