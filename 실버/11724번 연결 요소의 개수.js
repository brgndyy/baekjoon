const input = `6 5
1 2
2 5
5 1
3 4
4 6`.split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let graph = Array.from({ length: N + 1 }, () => []);

let visited = Array(N + 1).fill(false);

let answer = 0;

for (let i = 0; i < M; i++) {
  let [x, y] = input.shift().split(" ").map(Number);

  graph[x].push(y);
  graph[y].push(x);
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer += 1;
  }
}

function dfs(i) {
  visited[i] = true;

  for (let x of graph[i]) {
    if (!visited[x]) {
      dfs(x);
    }
  }
}

console.log(answer);
