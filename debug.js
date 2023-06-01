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

for (let i = 0; i < 19 && !isWinner; i++) {
  for (let j = 0; j < 19 && !isWinner; j++) {
    if (i + 4 < 19) {
      let whiteCnt = 0;
      let blackCnt = 0;
      for (let m = i; m <= i + 4; m++) {
        if (omokBoard[m][j] === 1) {
          blackCnt++;
          if (blackCnt === 5) {
            winner.push(1);
            winner.push(m, j);
            isWinner = true;
          }
        }
        if (omokBoard[m][j] === 2) {
          whiteCnt++;
          if (whiteCnt === 5) {
            winner.push(2);
            winner.push(m, j);
            isWinner = true;
          }
        }
      }
    }

    if (j + 4 < 19) {
      let whiteCnt = 0;
      let blackCnt = 0;
      for (let m = j; m <= j + 4; m++) {
        if (omokBoard[i][m] === 1) {
          blackCnt++;
          if (blackCnt === 5) {
            winner.push(1);
            winner.push(i, m);
            isWinner = true;
          }
        }
        if (omokBoard[i][m] === 2) {
          whiteCnt++;
          if (whiteCnt === 5) {
            winner.push(2);
            winner.push(i, m);
            isWinner = true;
          }
        }
      }
    }

    if (i + 4 < 19 && j + 4 < 19) {
      let whiteCnt = 0;
      let blackCnt = 0;
      for (let m = 0; m <= 4; m++) {
        if (omokBoard[i + m][j + m] === 1) {
          blackCnt++;
          if (blackCnt === 5) {
            winner.push(1);
            winner.push(i + m, j + m);
            isWinner = true;
          }
        }
        if (omokBoard[i + m][j + m] === 2) {
          whiteCnt++;
          if (whiteCnt === 5) {
            winner.push(2);
            winner.push(i + m, j + m);
            isWinner = true;
          }
        }
      }
    }

    if (i + 4 < 19 && j - 4 >= 0) {
      let whiteCnt = 0;
      let blackCnt = 0;
      for (let m = 0; m <= 4; m++) {
        if (omokBoard[i + m][j - m] === 1) {
          blackCnt++;
          if (blackCnt === 5) {
            winner.push(1);
            winner.push(i + m, j - m);
            isWinner = true;
          }
        }
        if (omokBoard[i + m][j - m] === 2) {
          whiteCnt++;
          if (whiteCnt === 5) {
            winner.push(2);
            winner.push(i + m, j - m);
            isWinner = true;
          }
        }
      }
    }
  }
}

console.log(winner);


년도를 4로 나누어서 나머지가 없으면 윤년입니다.
그러나 그중에서 년도가 100으로 나누어지면 평년입니다.
그 중에서 다시 400으로 나누어지면 윤년입니다.

특정한 년도가 윤년인지 판단해서 평년이면 0을 리턴하고 윤년이면 1을 리턴하는 함수를 작성하려합니다.

function(year){
  if(){
    return 0;
  } else{
    return 1;
  }
}


2진법으로 표현한 '11111101'을 16진법으로 변환하면 '0xFD'이다