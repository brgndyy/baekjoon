const input = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`.split("\n");

const N = Number(input.shift());

const apartments = input.map((apart) => apart.split("").map(Number));

let visited = Array.from({ length: N }, () => Array(N).fill(false));

let dx = [1, 0, -1, 0];

let dy = [0, 1, 0, -1];

let answer = [];

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
    let nx = dx[i] + x;
    let ny = dy[i] + y;

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

answer.sort((a, b) => a - b);

console.log(answer.length);
console.log(answer.join("\n"));
