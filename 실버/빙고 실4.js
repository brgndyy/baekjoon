const input = `11 12 2 24 10
16 1 13 3 25
6 20 5 21 17
19 4 8 14 9
22 15 7 23 18
5 10 7 16 2
4 22 8 17 13
3 18 1 6 25
12 19 23 14 21
11 24 9 20 15`.split("\n");

let bingoBoard = [];
let callBoard = [];
let callCount = 0;
let bingoCount = 0;

for (let i = 0; i < 5; i++) {
  let arr = input
    .shift()
    .split(" ")
    .map((str) => Number(str));
  bingoBoard.push(arr);
}
for (let i = 0; i < 5; i++) {
  let arr = input
    .shift()
    .split(" ")
    .map((str) => Number(str));
  callBoard.push(arr);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let callNum = callBoard[i][j];

    for (let m = 0; m < 5; m++) {
      for (let k = 0; k < 5; k++) {
        if (bingoBoard[m][k] === callNum) {
          bingoBoard[m][k] = 0;
          callCount++;
        }

        for (let r = 0; r < 5; r++) {
          let count = 0;

          for (let t = 0; t < 5; t++) {
            if (bingoBoard[r][t] === 0) {
              count++;
            }
          }

          if (count === 5) {
            bingoCount++;
            if (bingoCount === 3) {
              break;
            }
          }
        }

        for (let r = 0; r < 5; r++) {
          let count = 0;
          for (let t = 0; t < 5; t++) {
            if (bingoBoard[t][r] === 0) {
              count++;
            }
          }

          if (count === 5) {
            bingoCount++;

            if (bingoCount === 3) {
              break;
            }
          }
        }

        let rightDiagCount = 0;

        for (let r = 4; r >= 0; r--) {
          if (bingoBoard[4 - r][r] === 0) {
            rightDiagCount++;
          }
        }

        if (rightDiagCount === 5) {
          bingoCount++;

          if (bingoCount === 3) {
            break;
          }
        }

        let leftDiagCount = 0;

        for (let r = 0; r < 5; r++) {
          if (bingoBoard[r][r] === 0) {
            leftDiagCount++;
          }
        }

        if (leftDiagCount === 5) {
          bingoCount++;

          if (bingoCount === 3) {
            break;
          }
        }
      }
    }
  }
}

console.log(callCount);
