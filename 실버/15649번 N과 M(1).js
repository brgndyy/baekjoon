const input = `4 2`;

let [N, M] = input.split(" ").map(Number);

const selected = Array(M).fill(0);

const visited = Array(N).fill(false);

let result = "";

function dfs(depth) {
  if (depth === M) {
    const resultArr = [];

    for (let i = 0; i < M; i++) {
      resultArr.push(selected[i]);
    }

    return (result += `${resultArr.join(" ")}\n`);
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) {
      continue;
    }

    selected[depth] = i;
    visited[i] = true;
    dfs(depth + 1);
    visited[i] = false;
  }
}

dfs(0);

console.log(result.trim());
