const input = `7 6
87`.split("\n");

let [C, R] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
let K = Number(input.shift());

let board = Array.from({ length: R + 1 }, () => Array(C + 1).fill(0));

let dir = 4;
let maxNum = C * R;
let count = 1;
let startPoint = 1;
let heightNum = 1;
let widthNum = 1;

if (maxNum < K) {
  console.log(0);
} else {
  while (count <= K) {
    if (dir === 4) {
      for (let i = heightNum; i <= R && board[i][widthNum] === 0; i++) {
        board[i][widthNum] = count++;
        heightNum = i;
      }
      dir = 3;
      widthNum++;
    } else if (dir === 3) {
      for (let i = widthNum; i <= C && board[heightNum][i] === 0; i++) {
        board[heightNum][i] = count++;
        widthNum = i;
      }
      dir = 2;
      heightNum--;
    } else if (dir === 2) {
      for (
        let i = heightNum;
        i >= startPoint && board[i][widthNum] === 0;
        i--
      ) {
        board[i][widthNum] = count++;
        heightNum = i;
      }
      dir = 1;
      widthNum--;
    } else if (dir === 1) {
      for (
        let i = widthNum;
        i >= startPoint && board[heightNum][i] === 0;
        i--
      ) {
        board[heightNum][i] = count++;
        widthNum = i;
      }
      dir = 4;
      heightNum++;
      startPoint++;
    }
  }

  for (let i = 1; i <= R; i++) {
    for (let j = 1; j <= C; j++) {
      if (board[i][j] === K) {
        console.log(j, i);
        break;
      }
    }
  }
}
