const input = `1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
5 5
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0`.split("\n");

let dx = [1, 1, 0, -1, -1, -1, 0, 1];
let dy = [0, 1, 1, 1, 0, -1, -1, -1];

for (let i = 0; i < input.length - 1; i++) {
  const [w, h] = input[i].split(" ").map(Number);
  const graph = [];

  for (let j = 1 + i; j <= i + h; j++) {
    const line = input[j].split(" ").map(Number);

    graph.push(line);
  }

  const visited = Array.from({ length: h }, () => Array(w).fill(0));

  let count = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && visited[i][j] === 0) {
        bfs(i, j);
        count += 1;
      }
    }
  }

  function bfs(i, j) {
    const queue = [[i, j]];
    visited[i][j] = 1;

    while (queue.length) {
      const [currentX, currentY] = queue.shift();

      for (let i = 0; i < 8; i++) {
        const nx = currentX + dx[i];
        const ny = currentY + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < h &&
          ny < w &&
          graph[nx][ny] === 1 &&
          visited[nx][ny] === 0
        ) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }
  }

  console.log(count);

  i += h;
}
