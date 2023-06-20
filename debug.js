const input = `1 2 4
1 2 1
2 1 3
3 3 3`.split("\n");

let [r, c, k] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
let arr = input.map((str) => str.split(" ").map((str) => Number(str)));

function solution(r, c, k, arr) {
  let count = 0;
  let findIndex = [r - 1, c - 1];
  let N = arr.length;
  let M = arr[0].length;
  let newArr = [];

  if (arr[findIndex[0]][findIndex[1]] === k) {
    return count;
  } else {
    while (arr[findIndex[0]][findIndex[1]] !== k) {
      if (N >= M) {
        let maxM = 0;
        for (let i = 0; i < N; i++) {
          let arrMap = new Map();
          for (let j = 0; j < M; j++) {
            if (arr[i][j] === 0) {
              continue;
            } else {
              arrMap.set(arr[i][j], arrMap.get(arr[i][j]) + 1 || 1);
            }
          }

          let sortedArrMap = [...arrMap].sort((a, b) => {
            if (a[1] === b[1]) {
              return a[0] - b[0];
            } else {
              return a[1] - b[1];
            }
          });

          sortedArrMap = sortedArrMap.flat();
          if (sortedArrMap.length > maxM) {
            maxM = sortedArrMap.length;
          } else if (sortedArrMap.length < maxM) {
            while (sortedArrMap.length !== maxM) {
              sortedArrMap.push(0);
            }
          }
          arr[i] = sortedArrMap;
        }

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].length < maxM) {
            while (arr[i].length !== maxM) {
              arr[i].push(0);
            }
          }
        }

        M = maxM;

        if (M > 100) {
          for (let i = 0; i < arr.length; i++) {
            arr[i].splice(0, 100);
          }
          M = 100;
        }

        count++;
      } else if (M > N) {
        let maxN = 0;
        let newBoard = Array.from({ length: M }, () => Array(M).fill(0));

        for (let i = 0; i < M; i++) {
          let arrMap = new Map();
          for (let j = 0; j < N; j++) {
            if (arr[j][i] === 0) {
              continue;
            } else {
              arrMap.set(arr[j][i], arrMap.get(arr[j][i]) + 1 || 1);
            }
          }

          let sortedArrMap = [...arrMap].sort((a, b) => {
            if (a[1] === b[1]) {
              return a[0] - b[0];
            } else {
              return a[1] - b[1];
            }
          });

          sortedArrMap = sortedArrMap.flat();

          if (sortedArrMap.length > maxN) {
            maxN = sortedArrMap.length;
          }

          for (let x = 0; x < sortedArrMap.length; x++) {
            newBoard[x][i] = sortedArrMap[x];
          }
        }

        arr = newBoard;
        N = maxN;

        if (N > 100) {
          for (let i = 0; i < arr.length; i++) {
            arr.splice(0, 100);
          }
          N = 100;
        }

        count++;
      }
    }

    return count;
  }
}

console.log(solution(r, c, k, arr));
