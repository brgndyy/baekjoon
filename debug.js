const input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.split("\n");

const vertex = Number(input.shift());

const edgesNum = Number(input.shift());

let visited = Array(vertex + 1).fill(false);

let graph = Array.from({ length: vertex + 1 }, () => []);

let count = 0;

for (let i = 0; i < edgesNum; i++) {
  let [x, y] = input[i].split(" ").map(Number);

  graph[y].push(x);
  graph[x].push(y);
}

function dfs(vertex) {
  visited[vertex] = true;
  count += 1;

  for (let x of graph[vertex]) {
    if (!visited[x]) {
      dfs(x);
    }
  }
}

dfs(1);

console.log(count);
