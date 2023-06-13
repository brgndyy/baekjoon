const input = `5 4
0 0 1 0 2
2 3 2 1 0
4 3 2 9 0
1 0 2 9 0
8 8 2 1 0
1 3
3 4
8 1
4 8`.split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let totalMap = [];
let bibarigiPos = [
  [N - 2, 0],
  [N - 1, 0],
  [N - 2, 1],
  [N - 1, 1],
];

let dir = [
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
];

let diagonalDir = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

for (let i = 0; i < N; i++) {
  let arr = input
    .shift()
    .split(" ")
    .map((str) => Number(str));

  totalMap.push(arr);
}

let cloudArr = [];

for (let i = 0; i < bibarigiPos.length; i++) {
  let [hPos, wPos] = bibarigiPos[i];

  cloudArr.push([hPos, wPos]);
}

for (let i = 0; i < input.length; i++) {
  let [di, si] = input[i].split(" ").map((str) => Number(str));

  di -= 1;

  for (let j = 0; j < si; j++) {
    for (let k = 0; k < bibarigiPos.length; k++) {
      let nx = bibarigiPos[k][0] + dir[di][0];
      let ny = bibarigiPos[k][1] + dir[di][1];

      if (nx < 0) {
        nx = N - 1;
      } else if (nx >= N) {
        nx = 0;
      }
      if (ny < 0) {
        ny = N - 1;
      } else if (ny >= N) {
        ny = 0;
      }

      bibarigiPos[k][0] = nx;
      bibarigiPos[k][1] = ny;
    }
  }

  for (let i = 0; i < bibarigiPos.length; i++) {
    totalMap[bibarigiPos[i][0]][bibarigiPos[i][1]] += 1;
  }

  for (let j = 0; j < bibarigiPos.length; j++) {
    let count = 0;

    for (let k = 0; k < diagonalDir.length; k++) {
      let nx = bibarigiPos[j][0] + diagonalDir[k][0];
      let ny = bibarigiPos[j][1] + diagonalDir[k][1];

      if (nx >= 0 && ny >= 0 && nx < N && ny < N && totalMap[nx][ny] !== 0) {
        count++;
      }
    }

    totalMap[bibarigiPos[j][0]][bibarigiPos[j][1]] += count;
  }

  let newBibarigiPos = [];

  for (let m = 0; m < N; m++) {
    for (let k = 0; k < N; k++) {
      if (
        totalMap[m][k] >= 2 &&
        !bibarigiPos.some(([r, c]) => r === m && c === k)
      ) {
        totalMap[m][k] -= 2;
        newBibarigiPos.push([m, k]);
      }
    }
  }
  bibarigiPos = newBibarigiPos;
}

let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    result += totalMap[i][j];
  }
}

console.log(result);
