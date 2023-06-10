const input = `8
-1 2 14 7 4 -5 8 9
10 6 23 2 -1 -1 7 11
9 3 5 -2 4 4 6 6
7 15 0 8 21 20 6 6
19 8 12 -8 4 5 2 9
1 2 3 4 5 6 7 8
9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24`.split("\n");

let N = parseInt(input[0]);

const MAX = 1024;
let arr = Array(MAX)
  .fill()
  .map(() => Array(MAX).fill(0));

for (let i = 0; i < N; i++) {
  let elements = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    arr[i][j] = elements[j];
  }
}

while (N != 1) {
  let temp = Array(N / 2)
    .fill()
    .map(() => Array(N / 2).fill(0));

  for (let y = 0; y < N; y += 2) {
    for (let x = 0; x < N; x += 2) {
      let tempY = y;
      let tempX = x;

      let v = [
        arr[tempY][tempX],
        arr[tempY + 1][tempX],
        arr[tempY][tempX + 1],
        arr[tempY + 1][tempX + 1],
      ];

      v.sort((a, b) => a - b);

      temp[Math.floor(y / 2)][Math.floor(x / 2)] = v[2];
    }
  }

  N = Math.floor(N / 2);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      arr[i][j] = temp[i][j];
    }
  }
}

console.log(arr[0][0]);
