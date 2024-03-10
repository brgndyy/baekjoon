const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

const field = [];

for (let i = 1; i < input.length; i++) {
  const line = input[i].split(" ").map(Number);

  field.push(line);
}

let maxDay = 0;
const queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (field[i][j] === 1) {
      queue.push([i, j, 0]);
    }
  }
}

function bfs() {
  while (queue.length) {
    const [currentX, currentY, day] = queue.shift();

    maxDay = day;

    for (let i = 0; i < 4; i++) {
      const nx = currentX + dx[i];
      const ny = currentY + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M && field[nx][ny] === 0) {
        field[nx][ny] = 1;
        queue.push([nx, ny, day + 1]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 0) {
        return -1;
      }
    }
  }

  return maxDay;
}

console.log(bfs());
