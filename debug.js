const input = `6 4 2
1 2 3 4
5 6 7 8
9 1 6 3
8 7 2 5
7 5 4 1
4 2 1 6`.split("\n");

let [N, M, R] = input[0].split(" ").map((x) => parseInt(x));
let arr = Array.from(Array(N), () => new Array(M).fill(0));

for (let i = 1; i <= N; i++) {
  arr[i - 1] = input[i].split(" ").map((x) => parseInt(x));
}

let min = Math.min(N, M);
for (let a = 0; a < R; a++) {
  let newArr = Array.from(Array(N), () => new Array(M).fill(0));
  for (let b = 0; b < Math.floor(min / 2); b++) {
    // 해당 링 행렬의 최댓값
    let maxN = N - b - 1;
    let maxM = M - b - 1;
    // 서쪽 동쪽
    let nn = b;

    // 남쪽 북쪽
    let mm = b;

    // 맨왼쪽에서 남쪽방향으로
    for (let c = 0; c < maxN - b; c++, nn++) {
      newArr[nn + 1][mm] = arr[nn][mm];
    }

    // 맨 밑에서 동쪽 방향으로
    for (let c = 0; c < maxM - b; c++, mm++) {
      newArr[nn][mm + 1] = arr[nn][mm];
    }

    // 맨 오른쪽에서 북쪽 방향으로
    for (let c = 0; c < maxN - b; c++, nn--) {
      newArr[nn - 1][mm] = arr[nn][mm];
    }

    // 맨 위에서 서쪽 방향으로
    for (let c = 0; c < maxM - b; c++, mm--) {
      newArr[nn][mm - 1] = arr[nn][mm];
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      arr[i][j] = newArr[i][j];
    }
  }
}

for (let i = 0; i < N; i++) {
  let output = "";
  for (let j = 0; j < M; j++) {
    output += arr[i][j] + " ";
  }
  console.log(output.trim());
}
