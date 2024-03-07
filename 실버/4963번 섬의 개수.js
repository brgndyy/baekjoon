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

let index = 0;
while (index < input.length - 1) {
  const [w, h] = input[index].split(" ").map(Number);
  if (w === 0 && h === 0) break;

  let field = [];
  index++;

  for (let j = 0; j < h; j++) {
    const line = input[index + j].split(" ").map(Number);
    field.push(line);
  }

  const visited = Array.from({ length: h }, () => Array(w).fill(false));

  function bfs(startX, startY) {
    const queue = [[startX, startY]];
    visited[startX][startY] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < h &&
          ny >= 0 &&
          ny < w &&
          field[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
  index += h;
}
