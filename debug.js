const input = `5 7
0 0 0 0 0 0 0
0 2 4 5 3 0 0
0 3 0 2 5 2 0
0 7 6 2 4 0 0
0 0 0 0 0 0 0`.split("\n");

const [N, M] = input[0].split(" ").map(Number);

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const map = [];
const queue = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);

  map.push(line);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] !== 0) {
      queue.push([i, j]);
    }
  }
}

while (queue.length) {
  const [xPos, yPos] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = xPos + dx[i];
    const ny = yPos + dy[i];

    if (map[nx][ny] === 0) {
      map[xPos][yPos] -= 1;
    }
  }
}

console.log(queue);
