const input = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`.split("\n");

const N = Number(input.shift());

const cityArr = input.map((city) => city.split(" ").map(Number));

const visited = Array(N).fill(false);

let min = Number.MAX_SAFE_INTEGER;

function dfs(depth, start, cost) {
  if (depth === N - 1 && cityArr[start][0] !== 0) {
    min = Math.min(min, cost + cityArr[start][0]);

    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] || cityArr[i][0] === 0) {
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
