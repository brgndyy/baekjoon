const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let dx = [1, 2, 2, 1, -1, -2, -2, -1];
let dy = [-2, -1, 1, 2, 2, 1, -1, -2];

for (let i = 1; i < input.length; i++) {
  let chessBoardLength = Number(input[i]);

  let visited = Array.from({ length: chessBoardLength }, () =>
    Array(chessBoardLength).fill(0)
  );

  let [knightPositionRow, knightPositionCol] = input[i + 1]
    .split(" ")
    .map(Number);

  let [destinantionPositionRow, destinantionPositionCol] = input[i + 2]
    .split(" ")
    .map(Number);

  let queue = [];

  queue.push([knightPositionRow, knightPositionCol]);

  visited[knightPositionRow][knightPositionCol] = 1;

  function bfs() {
    while (queue.length) {
      const [currentRow, currentCol] = queue.shift();

      if (
        currentRow === destinantionPositionRow &&
        currentCol === destinantionPositionCol
      ) {
        return visited[currentRow][currentCol] - 1;
      }

      for (let i = 0; i < 8; i++) {
        let nx = currentRow + dx[i];
        let ny = currentCol + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < chessBoardLength &&
          ny < chessBoardLength &&
          visited[nx][ny] === 0
        ) {
          queue.push([nx, ny]);

          visited[nx][ny] = visited[currentRow][currentCol] + 1;
        }
      }
    }
  }

  console.log(bfs());

  i += 2;
}
