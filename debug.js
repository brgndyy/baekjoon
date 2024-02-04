const input = `2
3
7`.split("\n");

const N = Number(input.shift());

const numArr = input.map(Number);

for (let i = 0; i < N; i++) {
  const number = numArr[i];

  const arr = Array.from({ length: number }, (_, index) => index + 1);

  dfs([], 0, number, arr);
}

function dfs(result, depth, number, arr) {
  if (depth === number - 1) {
  }

  for (let x of [" ", "+", "-"]) {
  }
}
