const input = `5
7
3 1
3 4
2 4
2 3
4 3
4 5
1 5
2`.split("\n");

let N = Number(input.shift());
let K = Number(input.shift());
let I = Number(input.pop());

function solution(N, K, input, I) {
  let board = Array.from({ length: N }, () => Array(N).fill(0));
  let startPos = [0, 0];

  for (let i = 0; i < K; i++) {
    let [x, y] = [
      Number(input[i].split(" ")[0]),
      Number(input[i].split(" ")[1]),
    ];

    let index = [x - 1, y - 1];
    let nx = index[0] - startPos[0]; // 2
    let ny = index[1] - startPos[1]; // 0

    for (let j = startPos[0]; j <= nx; j++) {
      for (let k = startPos[1]; k <= ny; k++) {
        board[j][k] = 1;
      }
    }

    startPos = [nx, ny];
  }

  return input[0].split(" ");
}

console.log(solution(N, K, input, I));
