const input = `1 2 3
2 1 1 2 0 0
1 1 2 1 3 1
3 3 0 0 0 0`.split("\n");

let [r, c, k] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
let board = input.map((str) => str.split(" ").map((str) => Number(str)));
let boardH = board.length;
let boardW = board[0].length;
let answer = 0;

let findIndex = [r - 1, c - 1];

if (board[findIndex[0]][findIndex[1]] === k) {
  console.log(0);
} else {
  while (answer <= 100) {
    if (boardH >= boardW) {
      answer++;
      let maxSize = 0;
      for (let i = 0; i < boardH; i++) {
        let boardMap = new Map();
        let currentBoardW = board[i].length;
        for (let j = 0; j < currentBoardW; j++) {
          if (board[i][j] === 0) {
            continue;
          } else {
            boardMap.set(board[i][j], boardMap.get(board[i][j]) + 1 || 1);
          }
        }

        let sortedBoardMap = [...boardMap].sort((a, b) => {
          if (a[1] === b[1]) {
            return a[0] - b[0];
          } else {
            return a[1] - b[1];
          }
        });

        let sortedBoardArr = [];

        sortedBoardMap.map((arr) => arr.map((num) => sortedBoardArr.push(num)));

        if (sortedBoardArr.length > maxSize) {
          maxSize = sortedBoardArr.length;
        }

        board[i] = sortedBoardArr;
        boardW = board[i].length;
      }

      for (let i = 0; i < board.length; i++) {
        if (board[i].length < maxSize) {
          while (board[i].length !== maxSize) {
            board[i].push(0);
          }
        }
      }

      if (board.length > 100) {
        board = board.splice(0, 100);
      }

      if (board[0].length > 100) {
        for (let i = 0; i < board.length; i++) {
          board[i] = board[i].splice(0, 100);
        }
      }

      boardH = board.length;
      boardW = board[0].length;

      if (board[findIndex[0]][findIndex[1]] === k) {
        console.log(answer);
        break;
      }
    } else if (boardH < boardW) {
      let newBoard = Array.from({ length: boardW }, () =>
        Array(boardW).fill(0)
      );
      answer++;
      let maxSize = newBoard.length;
      let count = 0;
      for (let i = 0; i < boardW; i++) {
        let boardMap = new Map();

        for (let j = 0; j < boardH; j++) {
          if (board[j] && board[i][j] === 0) {
            continue;
          } else if (board[j]) {
            boardMap.set(board[j][i], boardMap.get(board[j][i]) + 1 || 1);
          }
        }

        let sortedBoardMap = [...boardMap].sort((a, b) => {
          if (a[1] === b[1]) {
            return a[0] - b[0];
          } else {
            return a[1] - b[1];
          }
        });

        let sortedBoardArr = [];

        sortedBoardMap.map((arr) => arr.map((num) => sortedBoardArr.push(num)));

        if (sortedBoardArr.length < maxSize) {
          while (sortedBoardArr.length !== maxSize) {
            sortedBoardArr.push(0);
          }
        }

        for (let i = 0; i < sortedBoardArr.length; i++) {
          newBoard[i][count] = sortedBoardArr[i];
        }
        count++;
      }

      board = newBoard;
      boardH = newBoard.length;
      if (board.length > 100) {
        board = board.splice(0, 100);
      }

      boardH = board.length;
      boardW = board[0].length;

      if (board[findIndex[0]][findIndex[1]] === k) {
        console.log(answer);
        break;
      }
    }
  }

  if (answer > 100) {
    console.log(-1);
  }
}
