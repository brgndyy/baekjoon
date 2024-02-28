const input = `3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1`.split("\n");

const testCase = Number(input[0]);

let dx = [1, 2, 2, 1, -1, -2, -2, -1];
let dy = [-2, -1, 1, 2, 2, 1, -1, -2];

let line = 1;

for (let t = 0; t < testCase; t++) {
  const chessBoardLength = Number(input[line++]);
  const [currentX, currentY] = input[line++].split(" ").map(Number);
  const [destinationX, destinationY] = input[line++].split(" ").map(Number);

  let visited = Array.from({ length: chessBoardLength }, () =>
    Array(chessBoardLength).fill(0)
  );
  let queue = [[currentX, currentY, 0]];
  visited[currentX][currentY] = 1; // 시작 위치 방문으로 표시

  function bfs() {
    while (queue.length > 0) {
      const [x, y, depth] = queue.shift();

      if (x === destinationX && y === destinationY) {
        return depth; // 목적지에 도착한경우 depth 반환
      }

      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < chessBoardLength &&
          ny < chessBoardLength &&
          visited[nx][ny] === 0
        ) {
          visited[nx][ny] = 1; // 방문 표시
          queue.push([nx, ny, depth + 1]); // 더 넓은 범위로 탐색
        }
      }
    }
  }

  console.log(bfs());
}
