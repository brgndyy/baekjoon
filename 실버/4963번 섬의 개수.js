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

for (let i = 0; i < input.length; i++) {
  if (i === input.length - 1) {
    break;
  }

  const [w, h] = input[i].split(" ").map(Number);

  const graph = [];

  for (let j = 1 + i; j <= i + h; j++) {
    const line = input[j].split(" ").map(Number);

    graph.push(line);
  }

  let visited = Array.from({ length: h }, () => Array(w).fill(0));
  let count = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && visited[i][j] === 0) {
        bfs(i, j);
        count++;
      }
    }
  }

  function bfs(i, j) {
    const queue = [[i, j]];
    visited[i][j] = 1;

    while (queue.length) {
      const [x, y] = queue.shift();
      visited[x][y] = true;

      for (let i = 0; i < 8; i++) {
        let nx = dx[i] + x;
        let ny = dy[i] + y;

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < h &&
          ny < w &&
          graph[nx][ny] === 1 &&
          visited[nx][ny] === 0
        ) {
          queue.push([nx, ny]);
        }
      }
    }
  }

  console.log(count);

  i += h;
}
