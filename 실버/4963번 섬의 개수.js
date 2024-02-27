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

let answer = [];

for (let i = 0; i < input.length; i++) {
  const [w, h] = input.shift().split(" ").map(Number);

  if (w === 0 && h === 0) {
    break;
  }

  let field = [];

  let visited = Array.from({ length: h }, () => Array(w).fill(false));

  let count = 0;

  for (let j = 0; j < h; j++) {
    let line = input.shift().split(" ").map(Number);

    field.push(line);
  }

  for (let x = 0; x < h; x++) {
    for (let y = 0; y < w; y++) {
      if (!visited[x][y] && field[x][y] === 1) {
        dfs(x, y);
        count += 1;
      }
    }
  }

  answer.push(count);

  function dfs(x, y) {
    visited[x][y] = true;

    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < h &&
        ny < w &&
        !visited[nx][ny] &&
        field[nx][ny] === 1
      ) {
        dfs(nx, ny);
      }
    }
  }
}

console.log(answer.join("\n"));
