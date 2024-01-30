const input = `8`;

const N = Number(input);

let queens = [];

let count = 0;

function possible(x, y) {
  for (let arr of queens) {
    const [a, b] = arr;

    if (a === x || b === y) {
      return false;
    }

    if (Math.abs(a - x) === Math.abs(b - y)) {
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
