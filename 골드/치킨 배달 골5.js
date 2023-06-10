const input = `5 1
1 2 0 0 0
1 2 0 0 0
1 2 0 0 0
1 2 0 0 0
1 2 0 0 0`.split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let board = input.map((str) => str.split(" ").map((str) => Number(str)));
let chickenArr = [];
let houseArr = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 2) {
      chickenArr.push([i, j]);
    } else if (board[i][j] === 1) {
      houseArr.push([i, j]);
    }
  }
}

let combinations = getCombinations(chickenArr, M);
let minDistSum = Infinity;

combinations.forEach((combination) => {
  let distSum = 0;
  houseArr.forEach((house) => {
    let minDist = Math.min(
      ...combination.map((chicken) => getDist(house, chicken))
    );
    distSum += minDist;
  });
  minDistSum = Math.min(minDistSum, distSum);
});

console.log(minDistSum);

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

function getDist(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}
