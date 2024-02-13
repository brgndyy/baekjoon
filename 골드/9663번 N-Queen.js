const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let queens = [];

let count = 0;

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
