const input = `7 8 1
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0`.split("\n");

let [R, C, T] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let board = input.map((board) => board.split(" ").map((str) => Number(str)));
let miseBoard = input.map((board) =>
  board.split(" ").map((str) => Number(str))
);

let dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

// 공기 청정기 위치 찾기
let cleanPos = [];

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === -1) {
      cleanPos.push([i, j]);
    }
  }
}

while (T !== 0) {
  T--;
  // 먼지 확산
  // 공기청정기 윗부분 위치들
  let [cleanerOnePosH, cleanerOnePosY] = [cleanPos[0][0], cleanPos[0][1]];
  let [cleanerTwoPosH, cleanerTwoPosY] = [cleanPos[1][0], cleanPos[1][1]];

  for (let i = cleanerOnePosH; i >= 0; i--) {
    for (let j = cleanerOnePosY; j < C; j++) {
      if (board[i][j] !== 0 && board[i][j] !== -1) {
        let num = board[i][j];
        let count = 0;

        for (let k = 0; k < 4; k++) {
          let nx = i + dir[k][0];
          let ny = j + dir[k][1];

          if (nx >= 0 && ny >= 0 && nx < R && ny < C && board[nx][ny] !== -1) {
            count++;
          }
        }

        let 확산량 = Math.floor(num / 5);
        let 남은미세먼지량 = num - 확산량 * count;
        miseBoard[i][j] = 남은미세먼지량;

        for (let k = 0; k < 4; k++) {
          let nx = i + dir[k][0];
          let ny = j + dir[k][1];

          if (nx >= 0 && ny >= 0 && nx < R && ny < C && board[nx][ny] !== -1) {
            miseBoard[nx][ny] += 확산량;
          }
        }
      }
    }
  }

  for (let i = cleanerTwoPosH; i < R; i++) {
    for (let j = cleanerTwoPosY; j < C; j++) {
      if (board[i][j] !== 0 && board[i][j] !== -1) {
        let num = board[i][j];
        let count = 0;

        for (let k = 0; k < 4; k++) {
          let nx = i + dir[k][0];
          let ny = j + dir[k][1];

          if (nx >= 0 && ny >= 0 && nx < R && ny < C && board[nx][ny] !== -1 && ) {
            count++;
          }
        }

        let 확산량 = Math.floor(num / 5);
        let 남은미세먼지량 = num - 확산량 * count;
        miseBoard[i][j] = 남은미세먼지량;

        for (let k = 0; k < 4; k++) {
          let nx = i + dir[k][0];
          let ny = j + dir[k][1];

          if (nx >= 0 && ny >= 0 && nx < R && ny < C && board[nx][ny] !== -1) {
            miseBoard[nx][ny] += 확산량;
          }
        }
      }
    }
  }



  
}

console.log(miseBoard);
