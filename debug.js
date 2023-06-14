const input = `3 3
1 1 0
1 1 1
1 0 1
1 1 1`.split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let [r, c, d] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let board = input.map((str) => str.split(" ").map(Number(str)));

let count = 0;

let dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

while (true) {
  let isClean = false;

  if (board[r][c] === 0) {
    board[r][c] = 2;
    count++;
  }

  for(let i = 0 ; i < 4; i++){
    d = (d + 3) % 4;

    let nx = r + dir[d][0];
    let ny = c + dir[d][1];

    if(nx >= 0 && ny >= 0 && nx < N && ny < M){

        if(board[nx][ny] === 0){

            r = nx;
            c = ny;

            isClean = true;
            break;
        }

    }

  }

  if(!isClean){
    let nd = 

  }


}
