const input = `5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0`.split("\n");

const [M, N] = input[0].split(" ").map(Number);

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
const queue = [];
let maxDay = 0;

const field = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);

  field.push(line);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (field[i][j] === 1) {
      queue.push([i, j, 0]);
    }
  }
}

function bfs(queue) {
  while (queue.length) {
    const [x, y, day] = queue.shift();
    maxDay = day;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
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

console.log(bfs(queue));
