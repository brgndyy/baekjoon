const input = `2
1
3
2
3`.split("\n");

let T = Number(input.shift());

let arr = input.map((str) => Number(str));
let answer = [];

for (let i = 0; i < arr.length; i += 2) {
  let k = arr[i]; // 1
  let n = arr[i + 1]; // 3
  let sum = 0;
  let house = Array.from({ length: k + 1 }, () => Array(n).fill(0));

  for (let j = 0; j < n; j++) {
    house[0][j] = j + 1;
  }

  for (let z = 1; z <= k; z++) {
    house[z][0] = house[z - 1][0];
    for (let m = 1; m <= n; m++) {
      house[z][m] = house[z - 1][m] + house[z][m - 1];
    }
  }

  answer.push(house[k][n - 1]);
}

console.log(answer);
