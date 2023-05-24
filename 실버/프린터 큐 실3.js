const input = `3
6 0
1 1 2 1 1 1
1 0
5
4 2
1 2 3 4`.split("\n");

let T = Number(input.shift());
let answer = [];

for (let i = 0; i < input.length; i += 2) {
  let printMap = new Map();
  let queue = [];

  // 6, 0
  let [N, M] = [input[i].split(" ")[0], input[i].split(" ")[1]];

  // [1, 1, 9, 1, 1, 1];
  let arr = input[i + 1].split(" ").map((str) => Number(str));

  for (let j = 0; j < N; j++) {
    printMap.set(i, arr[j]);
  }

  // [0, 1]
  // [1, 1];
  // [2, 9];
  // [3, 1];
  // [4, 1];
  // [5, 1];

  let printMapArr = [...printMap];
  let importanceArr = [];
  printMapArr.forEach((arr) => importanceArr.push(arr[1]));

  let maxImportance = Math.max(...importanceArr); // 9

  for (let k = 0; k < printMapArr.length; k++) {
    let [documentNum, importance] = [printMapArr[i][0], printMapArr[i][1]];

    if (importance >= maxImportance) {
      queue.push(printMapArr[i]);
    } else {
      let shift = printMapArr.shift();

      printMapArr.push(shift);
      k = -1;
    }
  }
}
