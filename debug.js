const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const vertexNumber = Number(input.shift());

const edgesNumber = Number(input.shift());

let graph = Array.from({ length: vertexNumber + 1 }, () => []);

let visited = Array(vertexNumber).fill(false);

let answer = 0;

for (let i = 0; i < edgesNumber; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[y].push(x);
  graph[x].push(y);
}

function dfs(vertex) {
  visited[vertex] = true;
  answer += 1;

  for (let x of graph[vertex]) {
    if (!visited[x]) {
      dfs(x);
    }
  }
}

dfs(1);

console.log(answer - 1);
