const input = `5 7
0 0 0 0 0 0 0
0 2 4 5 3 0 0
0 3 0 2 5 2 0
0 7 6 2 4 0 0
0 0 0 0 0 0 0`.split("\n");

const [N, M] = input[0].split(" ").map(Number);
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let map = [];
for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  map.push(line);
}

const bfs = (x, y, visited) => {
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        map[nx][ny] > 0 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
};

const isSeparated = (map) => {
  let visited = Array.from({ length: N }, () => Array(M).fill(false));
  let found = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0 && !visited[i][j]) {
        if (found) return true;
        bfs(i, j, visited);
        found = true;
      }
    }
  }

  return false;
};

const meltIce = (map) => {
  let newMap = map.map((row) => row.slice());
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0) {
        let waterCount = 0;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 0) {
            waterCount++;
          }
        }
        newMap[i][j] = Math.max(map[i][j] - waterCount, 0);
      }
    }
  }
  return newMap;
};

let year = 0;
while (true) {
  if (isSeparated(map)) {
    console.log(year);
    break;
  }
  map = meltIce(map);
  year++;
  if (map.flat().every((cell) => cell === 0)) {
    console.log(0);
    break;
  }
}
