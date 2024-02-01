const input = `2
3
7`.split("\n");

const N = Number(input.shift());

let allTestCase = input.map(Number);

let answer = [];

for (let i = 0; i < N; i++) {
  const number = allTestCase[i]; // 3

  let visited = Array(number).fill(false);

  let selected = Array(number).fill(0);

  dfs(0, number, visited, selected);
}

function dfs(depth, number, visited, selected) {
  if (depth === number) {
    let result = [];

    for (let i = 0; i < number; i++) {
      result.push(seletec[i]);
    }

    return (answer += result.join(" ") + "\n");
  }

  for (let i = 1; i <= number; i++) {
    if (visited[i]) {
      continue;
    }

    selected[depth] = i;

    visited[i] = true;
    dfs(depth + 1, number, visited, selected);
    visited[i] = false;
  }
}

console.log(answer);
