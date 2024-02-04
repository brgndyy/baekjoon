const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map;

let [N, M] = input;

let visited = Array(M).fill(false);

let selected = Array(M).fill(0);

let answer = new Set();

function dfs(depth) {
  if (depth === M) {
    let result = [];

    for (let i = 0; i < M; i++) {
      result.push(selected[i]);
    }

    result.sort((a, b) => a - b);

    answer.add(result.join(","));

    return;
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

[...answer].forEach((answer) => console.log(answer.split(",").join(" ")));
