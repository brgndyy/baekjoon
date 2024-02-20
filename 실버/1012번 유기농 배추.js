const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input.shift());

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

while (T--) {
  let [M, N, K] = input.shift().split(" ").map(Number);
  let field = Array.from({ length: N }, () => Array(M).fill(0));
  let visited = Array.from({ length: N }, () => Array(M).fill(false));
  let worms = 0;

  for (let i = 0; i < K; i++) {
    let [x, y] = input.shift().split(" ").map(Number);
    field[y][x] = 1;
  }

  function dfs(x, y) {
    visited[x][y] = true;

    for (let dir = 0; dir < 4; dir++) {
      let nx = x + dx[dir];
      let ny = y + dy[dir];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        !visited[nx][ny] &&
        field[nx][ny] === 1
      ) {
        dfs(nx, ny);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        worms++;
      }
    }
  }

  console.log(worms);
}
