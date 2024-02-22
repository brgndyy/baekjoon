const input = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`.split("\n");

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

const N = Number(input.shift());

let apartField = input.map((line) => line.split("").map(Number));

let visited = Array.from({ length: N }, () => Array(N).fill(false));

let apartNumbers = [];

let apartLength = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (apartField[i][j] === 1 && !visited[i][j]) {
      apartNumbers.push(dfs(i, j));
    }
  }
}

function dfs(x, y) {
  visited[x][y] = true;
  let count = 1;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < N &&
      ny < N &&
      !visited[nx][ny] &&
      apartField[nx][ny] === 1
    ) {
      count += dfs(nx, ny);
    }
  }

  return count;
}

console.log(apartNumbers);
