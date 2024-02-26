const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let apartments = [];

let visited = Array.from({ length: N }, () => Array(N).fill(false));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let answer = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split("").map(Number);

  apartments.push(line);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (apartments[i][j] === 1 && !visited[i][j]) {
      answer.push(dfs(i, j));
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
      apartments[nx][ny] === 1
    ) {
      count += dfs(nx, ny);
    }
  }

  return count;
}

console.log(answer.length);
answer.sort((a, b) => a - b);
console.log(answer.join("\n"));
