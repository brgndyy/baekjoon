const input = `5
6 8 2 6 2
3 2 3 4 6
6 7 3 3 2
7 2 5 3 6
8 9 5 2 7`.split("\n");

const N = Number(input[0]);

let field = [];

let answer = [];

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

for (let i = 1; i <= N; i++) {
  field.push(input[i].split(" ").map(Number));
}

let visited = Array.from({ length: N }, () => Array(N).fill(false));

let maxNum = Number.MIN_SAFE_INTEGER;
let minNum = Number.MAX_SAFE_INTEGER;

// 최소, 최댓값 구해주기
for (let i = 0; i < N; i++) {
  let max = Math.max(...field[i]);
  let min = Math.min(...field[i]);

  maxNum = Math.max(max, maxNum);
  minNum = Math.min(min, minNum);
}

for (let height = minNum; height <= maxNum; height++) {
  let safeZones = 0;
  field = field.map((row) => row.map((value) => value));
  visited = Array.from({ length: N }, () => Array(N).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && field[i][j] > height) {
        dfs(i, j, height);
        safeZones++;
      }
    }
  }

  answer.push(safeZones);
}

function dfs(x, y, height) {
  visited[x][y] = true;

  for (let k = 0; k < 4; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      !visited[nx][ny] &&
      field[nx][ny] > height
    ) {
      dfs(nx, ny, height);
    }
  }
}

console.log(answer);
