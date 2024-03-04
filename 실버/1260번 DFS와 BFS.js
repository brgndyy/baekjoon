const input = `1000 1 1000
999 1000`.split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

let visited = Array(N + 1).fill(0);

for (let i = 1; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  graph[x].push(y);
  graph[y].push(x);
}

for (let i = 0; i < graph.length; i++) {
  graph[i].sort((a, b) => a - b);
}

let answer = [];

function dfs(vertex) {
  visited[vertex] = true;

  answer.push(vertex);

  for (let x of graph[vertex]) {
    if (!visited[x]) {
      dfs(x);
    }
  }
}

dfs(V);

console.log(answer.join(" "));

answer = [];

function bfs(vertex) {
  let visited = Array(N + 1).fill(false);
  let queue = [];
  queue.push(vertex);
  visited[vertex] = true;

  while (queue.length) {
    const targetVertex = queue.shift();
    answer.push(targetVertex);

    for (let next of graph[targetVertex]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

bfs(V);

console.log(answer.join(" "));
