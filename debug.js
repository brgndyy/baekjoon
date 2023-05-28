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

let bingoArr = [];
let numArr = [];
let checkCount = 0;

for (let i = 0; i < 5; i++) {
  let arr = input
    .shift()
    .split(" ")
    .map((str) => Number(str));
  bingoArr.push(arr);
}

for (let j = 0; j < 5; j++) {
  let arr = input
    .shift()
    .split(" ")
    .map((str) => Number(str));
  numArr.push(arr);
}

for (let i = 0; i < numArr.length; i++) {
  for (let j = 0; j < numArr[i].length; j++) {
    let callNum = numArr[i][j];

    for (let k = 0; k < bingoArr.length; k++) {
      for (let z = 0; z < bingoArr[k].length; z++) {
        if (bingoArr[k][z] === callNum) {
          checkCount++;
          let answerCount = 0;
          bingoArr[k][z] = 0;
        }
        for (let m = 0; m < 5; m++) {
          let count = 0;
          for (let n = 0; n < 5; n++) {
            if (bingoArr[m][n] === 0) {
              count++;
            }
          }
          if (count === 5) {
            answerCount++;
          }
        }

        for (let a = 0; a < 5; a++) {
          let count = 0;
          for (let b = 0; b < 5; b++) {
            if (bingoArr[b][a] === 0) {
              count++;
            }
          }

          if (count === 5) {
            answerCount++;
          }
        }

        for (let c = 0; c < 5; c++) {
          let count = 0;

          if (bingoArr[c][c] === 0) {
            count++;
          }

          if (count === 5) {
            answerCount++;
          }
        }

        for (let d = 4; d >= 0; d--) {
          let count = 0;
          if (bingoArr[d][4 - d] === 0) {
            count++;
          }

          if (count === 5) {
            answerCount++;
          }
        }

        if (answerCount === 3) {
          console.log(checkCount);
          return;
        }
      }
    }
  }
}
