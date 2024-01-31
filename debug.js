const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

let count = 0;

let queens = [];

function possible(row, column) {
  for (let queen of queens) {
    let [a, b] = queen;

    if (a === row || b === column) {
      return false;
    }

    if (Math.abs(a - row) === Math.abs(b - column)) {
      return false;
    }
  }

  return true;
}

function dfs(row) {
  // 1열부터 끝열까지 잘왔다면
  if (row === N) {
    count += 1;
  }

  for (let i = 0; i < N; i++) {
    if (!possible(row, i)) {
      continue;
    }

    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);

console.log(count);
