const input = `4 6
101111
101010
101011
111011`.split("\n");

const [N, M] = input[0].split(" ").map(Number);

const map = [];

for (let i = 1; i < input.length; i++) {
  const line = input[i].split("").map(Number);

  map.push(line);
}

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

function bfs() {
  const queue = [];
  queue.push([0, 0]);
  const visited = Array.from({ length: N }, () => Array(M).fill(0));
  visited[0][0] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      return visited[N - 1][M - 1];
    }

    for (let i = 0; i < 4; i++) {
      let nx = dx[i] + x;
      let ny = dy[i] + y;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < M &&
        !visited[nx][ny] &&
        map[nx][ny] === 1
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = visited[x][y] + 1;
      }
    }
  }
}

console.log(bfs());
