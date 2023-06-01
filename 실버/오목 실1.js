const input = `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 1 2 0 0 2 2 2 1 0 0 0 0 0 0 0 0 0 0
0 0 1 2 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0
0 0 0 1 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 2 2 0 0 0 0 0 0 0 0 0 0 0 0
0 0 1 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 2 1 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0`.split("\n");

let omokBoard = input.map((arr) => arr.split(" ").map((str) => Number(str)));
let winner = [];
let isWinner = false;

for (let i = 0; i < 15 && !isWinner; i++) {
  for (let j = 0; j < 15 && !isWinner; j++) {
    for (let m = i; m < i + 5 && !isWinner; m++) {
      let whiteCnt = 0;
      let blackCnt = 0;
      for (let n = j; n < j + 5 && !isWinner; n++) {
        if (omokBoard[m][n] === 1) {
          blackCnt++;
        }
        if (omokBoard[m][n] === 2) {
          whiteCnt++;
        }

        if (blackCnt === 5) {
          winner.push(1);
          isWinner = true;
        } else if (whiteCnt === 5) {
          winner.push(2);
          isWinner = true;
        }
      }
    }

    for (let m = i; m < i + 5 && !isWinner; m++) {
      let whiteCnt = 0;
      let blackCnt = 0;
      for (let n = j; n < j + 5 && !isWinner; n++) {
        if (omokBoard[n][m] === 1) {
          blackCnt++;
        }
        if (omokBoard[n][m] === 2) {
          whiteCnt++;
        }

        if (blackCnt === 5) {
          winner.push(1);
          isWinner = true;
        } else if (whiteCnt === 5) {
          winner.push(2);
          isWinner = true;
        }
      }
    }

    let oneDiagonalCnt = 0;
    let oneDiagonalLineNum = i;

    for (let z = j; z < j + 5 && !isWinner; z++) {
      let whiteCnt = 0;
      let blackCnt = 0;
      if (omokBoard[oneDiagonalLineNum][z] === 1) {
        blackCnt++;
      }
      if (omokBoard[oneDiagonalLineNum][z] === 2) {
        whiteCnt++;
      }
      oneDiagonalLineNum++;

      if (blackCnt === 5) {
        winner.push(1);
        isWinner = true;
      } else if (whiteCnt === 5) {
        winner.push(2);
        isWinner = true;
      }
    }

    let twoDiagonalCnt = 0;
    let twoDiagonalLineNum = j + 4;
    let twoDiagonalLineNum2 = i;

    for (let z = twoDiagonalLineNum; z >= j && !isWinner; z--) {
      let whiteCnt = 0;
      let blackCnt = 0;
      if (omokBoard[twoDiagonalLineNum2][z] === 1) {
        blackCnt++;
      }
      if (omokBoard[twoDiagonalLineNum2][z] === 2) {
        whiteCnt++;
      }
      twoDiagonalLineNum2++;

      if (blackCnt === 5) {
        winner.push(1);
        isWinner = true;
      } else if (whiteCnt === 5) {
        winner.push(2);
        isWinner = true;
      }
    }
  }
}

console.log(winner);
