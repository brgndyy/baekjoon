const input = `5 3
0 0 1 0 0
0 0 2 0 1
0 1 2 0 0
0 0 1 0 0
0 0 0 0 2`.split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let board = input.map((str) => str.split(" ").map((str) => Number(str)));
let chickenIndexArr = [];
let chickenStoreMap = new Map();
let storeCount = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 2) {
      chickenIndexArr.push([i, j]);
      chickenStoreMap.set(storeCount, 0);
      storeCount++;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1) {
      let minDis = 1;
      for (let k = 0; k < chickenIndexArr.length; k++) {
        let dis =
          Math.abs(i - chickenIndexArr[k][0]) +
          Math.abs(j - chickenIndexArr[k][1]);

        if (maxDis <= dis) {
          minDis = dis;
        }
      }
    }
  }
}

console.log(chickenStoreMap);
