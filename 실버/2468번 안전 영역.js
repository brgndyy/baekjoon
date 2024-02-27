const input = `5
6 8 2 6 2
3 2 3 4 6
6 7 3 3 2
7 2 5 3 6
8 9 5 2 7`.split("\n");

const N = Number(input[0]);

let field = [];
let visited = Array.from({ length: N }, () => Array(N).fill(false));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let answer = Number.MIN_SAFE_INTEGER;

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 1; i <= N; i++) {
  const arr = input[i].split(" ").map(Number);
  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);

  min = Math.min(min, minNumber);
  max = Math.max(max, maxNumber);

  field.push(arr);
}

for (let height = min - 1; height <= max; height++) {
  visited = Array.from({ length: N }, () => Array(N).fill(false));

  let count = 0;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (!visited[x][y] && field[x][y] > height) {
        dfs(x, y, height);
        count += 1;
      }
    }
  }
  answer = Math.max(answer, count);
}

function dfs(x, y, height) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < N &&
      ny < N &&
      !visited[nx][ny] &&
      field[nx][ny] > height
    ) {
      dfs(nx, ny, height);
    }
  }
}

console.log(answer);
