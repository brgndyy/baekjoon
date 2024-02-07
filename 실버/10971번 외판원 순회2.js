const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

const cityArr = input.map((city) => city.split(" ").map(Number));

const visited = Array(N).fill(false);

let min = Number.MAX_SAFE_INTEGER;

// start => 현재 외판원이 방문하고 있는 도시

// cost => 현재까지 외판원이 방문하는데에 든 비용

function dfs(depth, start, cost) {
  if (depth === N - 1 && cityArr[start][0] !== 0) {
    min = Math.min(min, cost + cityArr[start][0]);

    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] || cityArr[start][i] === 0) {
      continue;
    }

    visited[i] = true;
    dfs(depth + 1, i, cost + cityArr[start][i]);
    visited[i] = false;
  }
}

visited[0] = true;
dfs(0, 0, 0);

console.log(min);
