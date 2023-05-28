const input = `1 2 4 4
2 3 5 7
3 1 6 5
7 3 8 6`.split("\n");

let arr = input.map((arr) => arr.split(" ").map((str) => Number(str)));

let totalArr = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 0; arr.length; i++) {
  // [1, 2]
  let [oneX, oneY] = [arr[i][0], arr[i][1]];
  // [4, 4]
  let [twoX, twoY] = [arr[i][2], arr[i][3]];

  for (let j = oneX; j <= twoX; j++) {
    for (let k = oneY; k <= twoY; k++) {
      totalArr[j][k] += 1;
    }
  }
}

console.log(arr);
