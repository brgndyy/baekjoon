const input = `4 2`.split(" ").map(Number);

const [N, M] = input;

let selected = Array(M).fill(0);

let answer = "";

function dfs(depth, index) {
  if (depth === M) {
    return (answer += selected.join(" ") + "\n");
  }

  for (let i = index; i <= N; i++) {
    selected[depth] = i;

    dfs(depth + 1, i);
  }
}

dfs(0, 1);

console.log(answer.trim());
