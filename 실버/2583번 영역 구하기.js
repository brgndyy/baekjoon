const input = `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`.split("\n");

const [M, N, K] = input[0].split(" ").map(Number);
const paper = Array.from({ length: M }, () => Array(N).fill(0));
const rectangles = input.slice(1).map((line) => line.split(" ").map(Number));

// M은 모눈 종이의 세로줄
// N은 모눈 종이의 가로줄
// x1, x2 같은 경우 직사각형의 가로 범위
// y1과 y2 같은 경우 직사각형의 세로 범위

rectangles.forEach(([x1, y1, x2, y2]) => {
  for (let i = M - y2; i < M - y1; i++) {
    for (let j = x1; j < x2; j++) {
      paper[i][j] = 1;
    }
  }
});

console.log(paper);
