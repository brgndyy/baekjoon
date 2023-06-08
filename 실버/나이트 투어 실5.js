const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let chessBoard = Array.from({ length: 6 }, () => Array(6).fill(0));

let answer = true;

let [startType, startNum] = [
  input[0].split("")[0],
  Number(input[0].split("")[1]),
];
startNum -= 1;
let startTypeNum;
if (startType === "A") {
  startTypeNum = 0;
} else if (startType === "B") {
  startTypeNum = 1;
} else if (startType === "C") {
  startTypeNum = 2;
} else if (startType === "D") {
  startTypeNum = 3;
} else if (startType === "E") {
  startTypeNum = 4;
} else if (startType === "F") {
  startTypeNum = 5;
}

chessBoard[startTypeNum][startNum] = 1;
let [firstTypeNum, firstNum] = [startTypeNum, startNum];

for (let i = 1; i < input.length; i++) {
  let [boardType, boardNum] = [
    input[i].split("")[0],
    Number(input[i].split("")[1]),
  ];
  let boardTypeNum;
  boardNum -= 1;

  if (boardType === "A") {
    boardTypeNum = 0;
  } else if (boardType === "B") {
    boardTypeNum = 1;
  } else if (boardType === "C") {
    boardTypeNum = 2;
  } else if (boardType === "D") {
    boardTypeNum = 3;
  } else if (boardType === "E") {
    boardTypeNum = 4;
  } else if (boardType === "F") {
    boardTypeNum = 5;
  }

  if (
    chessBoard[boardTypeNum][boardNum] === 0 &&
    ((Math.abs(boardTypeNum - startTypeNum) === 2 &&
      Math.abs(boardNum - startNum) === 1) ||
      (Math.abs(boardTypeNum - startTypeNum) === 1 &&
        Math.abs(boardNum - startNum) === 2))
  ) {
    chessBoard[boardTypeNum][boardNum] = 1;
    startTypeNum = boardTypeNum;
    startNum = boardNum;
  } else {
    answer = false;
    break;
  }
}

if (
  !(
    (Math.abs(firstTypeNum - startTypeNum) === 2 &&
      Math.abs(firstNum - startNum) === 1) ||
    (Math.abs(firstTypeNum - startTypeNum) === 1 &&
      Math.abs(firstNum - startNum) === 2)
  )
) {
  answer = false;
}

// 모든 칸이 방문되었는지 확인
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    if (chessBoard[i][j] === 0) {
      answer = false;
      break;
    }
  }
}

if (answer) {
  console.log("Valid");
} else {
  console.log("Invalid");
}
