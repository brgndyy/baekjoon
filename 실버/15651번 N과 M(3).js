const input = `4 2`.split(" ").map(Number);

const [N, M] = input;

let selected = Array(M).fill(0);

function dfs(depth) {
  if (depth === N) {
    console.log(selected);

    return;
  }

  for (let i = 1; i <= N; i++) {
    if (selected[depth] > 0) {
      continue;
    }

    selected[depth] = i;

    dfs(depth + 1);
  }
}

dfs(0);
