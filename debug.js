const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [N, M] = input;

let selected = Array(M).fill(0);

let answer = [];

function dfs(depth, index) {
  if (depth === M) {
    answer.push(selected.join(" "));
    return;
  }

  for (let i = index; i < N; i++) {
    selected[depth] = i + 1;

    dfs(depth + 1, i + 1);
  }
}

dfs(0, 0);

console.log(answer.join("\n"));
