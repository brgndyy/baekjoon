const input = `8 8
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0`.split("\n");

const [N, M] = input[0].split(" ").map(Number);

const field = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);

  field.push(line);
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}

// 바이러스 퍼뜨리는 bfs 함수
function spreadVirus(field, startPoints) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [...startPoints];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  startPoints.forEach((point) => {
    visited[point[0]][point[1]] = true;
  });

  while (queue.length) {
    const [x, y] = queue.shift();

    directions.forEach(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        field[nx][ny] === 0 &&
        !visited[nx][ny]
      ) {
        field[nx][ny] = 2;
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    });
  }
}

// 안전 영역 계산하는 함수

function calculateSafeArea(field) {
  let safeArea = 0;
  field.forEach((row) => {
    row.forEach((cell) => {
      if (cell === 0) safeArea += 1;
    });
  });
  return safeArea;
}

// 벽을 세울 수 있는 모든 위치의 조합을 찾습니다.
const emptySpaces = [];
const virusPositions = [];
field.forEach((row, rowIndex) => {
  row.forEach((cell, colIndex) => {
    if (cell === 0) emptySpaces.push([rowIndex, colIndex]);
    else if (cell === 2) virusPositions.push([rowIndex, colIndex]);
  });
});

let maxSafeArea = 0;
const wallCombinations = getCombinations(emptySpaces, 3);

wallCombinations.forEach((combination) => {
  // 새로운 벽을 세운 상태의 지도를 생성합니다.
  const newField = field.map((row) => [...row]);
  combination.forEach(([x, y]) => {
    newField[x][y] = 1;
  });

  // 바이러스를 퍼뜨립니다.
  spreadVirus(newField, virusPositions);

  // 안전 영역의 크기를 계산합니다.
  const safeArea = calculateSafeArea(newField);
  maxSafeArea = Math.max(maxSafeArea, safeArea);
});

console.log(maxSafeArea);

// 1. 벽 3개를 세울수 있는 경우의수를 모두 구한다

// 2. 해당 모든 경우의수를 돌면서, 각각 경우의수마다의 바이러스를 퍼뜨려준다.

// 3. 안전영역을 각 경우의 수마다 계산하여 업데이트 해준다.
