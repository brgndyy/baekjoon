const input = `1
3`.split("\n");

const N = Number(input.shift());

let allTestCase = input.map(Number);

let answer = [];

for (let i = 0; i < N; i++) {
  const number = allTestCase[i]; // 3

  let visited = Array(number).fill(false);

  let selected = Array.from({ length: number }, (_, index) => index + 1);

  dfs(0, number, visited, selected);
}

function dfs(depth, number, visited, selected) {
  if (depth === selected[selected.length - 1]) {
  }

  for (let i = 1; i <= number; i++) {
    if (visited[i]) {
      continue;
    }
  }
}

console.log(answer);
