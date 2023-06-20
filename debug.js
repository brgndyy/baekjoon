const input = `3 3 0 0 16
0 1 2
3 4 5
6 7 8
4 4 1 1 3 3 2 2 4 4 1 1 3 3 2 2`.split("\n");

function solution(input) {
  let [N, M, x, y, K] = input
    .shift()
    .split(" ")
    .map((str) => Number(str));
  let board = [];
  let startPos = [x, y];
  // 맨윗면, 동쪽, 남쪽, 서쪽, 북쪽, 맨밑면
  let dice = [0, 0, 0, 0, 0, 0];
  let answer = [];

  let dir = {
    1: [0, 1],
    2: [0, -1],
    3: [-1, 0],
    4: [1, 0],
  };

  for (let i = 0; i < N; i++) {
    let arr = input
      .shift()
      .split(" ")
      .map((str) => Number(str));
    board.push(arr);
  }

  let orderArr = input
    .shift()
    .split(" ")
    .map((str) => Number(str));

  ///--------

  for (let i = 0; i < K; i++) {
    if (orderArr[i] === 1) {
      let nx = startPos[0] + dir[1][0];
      let ny = startPos[1] + dir[1][1];

      // 범위 벗어나면 무시
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
        continue;
      } else {
        let boardNum = board[nx][ny];

        tmp = dice[0];
        dice[0] = dice[3];
        dice[3] = dice[5];
        dice[5] = dice[1];
        dice[1] = tmp;

        if (boardNum === 0) {
          board[nx][ny] = dice[5];
          dice[5] = 0;
        } else if (boardNum !== 0) {
          dice[5] = boardNum;
          board[nx][ny] = 0;
        }

        startPos = [nx, ny];
      }
      answer.push(dice[0]);
    }
    // 서쪽일때
    else if (orderArr[i] === 2) {
      let nx = startPos[0] + dir[2][0];
      let ny = startPos[1] + dir[2][1];

      // 범위 벗어나면 무시
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
        continue;
      } else {
        let boardNum = board[nx][ny];

        tmp = dice[0];
        dice[0] = dice[1];
        dice[1] = dice[5];
        dice[5] = dice[3];
        dice[3] = tmp;

        if (boardNum === 0) {
          board[nx][ny] = dice[5];
          dice[5] = 0;
        } else if (boardNum !== 0) {
          dice[5] = boardNum;
          board[nx][ny] = 0;
        }

        startPos = [nx, ny];
        answer.push(dice[0]);
      }
    }
    // 북쪽일때
    else if (orderArr[i] === 3) {
      let nx = startPos[0] + dir[3][0];
      let ny = startPos[1] + dir[3][1];

      // 범위 벗어나면 무시
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
        continue;
      } else {
        let boardNum = board[nx][ny];

        tmp = dice[0];
        dice[0] = dice[4];
        dice[4] = dice[5];
        dice[5] = dice[2];
        dice[2] = tmp;

        if (boardNum === 0) {
          board[nx][ny] = dice[5];
          dice[5] = 0;
        } else if (boardNum !== 0) {
          dice[5] = boardNum;
          board[nx][ny] = 0;
        }

        startPos = [nx, ny];
        answer.push(dice[0]);
      }
    } else if (orderArr[i] === 4) {
      let nx = startPos[0] + dir[4][0];
      let ny = startPos[1] + dir[4][1];

      // 범위 벗어나면 무시
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
        continue;
      } else {
        let boardNum = board[nx][ny];

        let tmp = dice[0];
        dice[0] = dice[2];
        dice[2] = dice[5];
        dice[5] = dice[4];
        dice[4] = tmp;

        if (boardNum === 0) {
          board[nx][ny] = dice[5];
          dice[5] = 0;
        } else if (boardNum !== 0) {
          dice[5] = boardNum;
          board[nx][ny] = 0;
        }

        startPos = [nx, ny];
        answer.push(dice[0]);
      }
    }
  }

  return answer.join("\n");
}

console.log(solution(input));
