const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let graph = Array.from({ length: N + 1 }, () => []);

let visited = Array(N + 1).fill(false);

let answer = 0;

for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  graph[x].push(y);
  graph[y].push(x);
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer += 1;
  }
}

function dfs(vertex) {
  if (visited[vertex]) {
    return;
  }

  visited[vertex] = true;

  for (let x of graph[vertex]) {
    if (!visited[x]) {
      dfs(x);
    }
  }
}

console.log(answer);
