const input = `6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`.split("\n");

const [M, N] = input[0].split(" ").map(Number);

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

const field = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);

  field.push(line);
}

const visited = Array.from({ length: N }, () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (input[i][j] === 1 && visited[i][j] === 0) {
      bfs([i, j]);
    }
  }
}

function bfs([i, j]) {
  const queue = [];
  queue.push([i, j]);
  visited[i][j] = 1;

  let count;

  while (queue.length) {
    const [currentX, currentY] = queue.shift();
  }
}
