const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.split("\n");

input.pop();

let answer = "";

for (let i = 0; i < input.length; i++) {
  let totalArr = input[i].split(" ").map(Number);

  let N = totalArr[0];

  let visited = Array(N).fill(false);

  let selected = Array(N - 1).fill(0);

  dfs(0, 1, visited, totalArr, selected, N);

  answer += "\n";
}

function dfs(depth, start, visited, totalArr, selected, N) {
  if (depth === N - 1) {
    console.log(selected);
    return;
  }

  for (let i = start; i <= N; i++) {
    if (visited[i]) {
      continue;
    }

    visited[i] = true;
    selected[depth] = totalArr[start];
    dfs(depth + 1, i + 1, visited, totalArr, selected, N);
    visited[i] = false;
  }
}

console.log(answer);
