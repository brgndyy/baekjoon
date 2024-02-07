const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

let selected = Array(M).fill(0);

let answer = "";

function dfs(depth, index) {
  if (depth === M) {
    answer += selected.join(" ") + "\n";
    return;
  }

  for (let i = index; i <= N; i++) {
    selected[depth] = i;
    dfs(depth + 1, i);
  }
}

dfs(0, 1);

console.log(answer.trim());
