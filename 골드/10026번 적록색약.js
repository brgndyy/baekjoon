const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let field = [];

let visited = Array.from({ length: N }, () => Array(N).fill(false));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

const answer = [];

let allColorCount = 0;
let blindnessColorCount = 0;

for (let i = 1; i <= N; i++) {
  const line = input[i].split("");

  field.push(line);
}

// 전체적인 구역 세주기

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      const targetColor = field[i][j];
      dfs(i, j, targetColor);
      allColorCount += 1;
    }
  }
}

answer.push(allColorCount);

// 적록색약 배열로 재조합

field = field.map((line) =>
  line.map((color) => {
    if (color === "G") {
      return "R";
    }
    return color;
  })
);

visited = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      const targetColor = field[i][j];
      dfs(i, j, targetColor);
      blindnessColorCount += 1;
    }
  }
}

answer.push(blindnessColorCount);

function dfs(x, y, targetColor) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < N &&
      ny < N &&
      !visited[nx][ny] &&
      field[nx][ny] === targetColor
    ) {
      dfs(nx, ny, targetColor);
    }
  }
}

console.log(answer.join(" "));
