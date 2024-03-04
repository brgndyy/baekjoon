const input = `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`.split("\n");

function isBipartite(graph, vertex) {
  const color = Array(vertex + 1).fill(0);

  function bfs(vertex) {
    const queue = [];
    queue.push(vertex);
    color[vertex] = 1;

    while (queue.length) {
      const targetVertex = queue.shift();

      for (let next of graph[targetVertex]) {
        if (color[next] === 0) {
          // ?
          color[next] = -color[targetVertex];
          queue.push(next);
        } else if (color[targetVertex] === color[next]) {
          return false;
        }
      }
    }

    return true;
  }

  for (let i = 1; i <= vertex; i++) {
    if (color[i] === 0 && !bfs(i)) {
      return false;
    }
  }

  return true;
}

for (let i = 1; i < input.length; i++) {
  const [vertex, edgeNumber] = input[i].split(" ").map(Number);

  const graph = Array.from({ length: vertex + 1 }, () => []);

  for (let j = i + 1; j <= i + edgeNumber; j++) {
    const [x, y] = input[j].split(" ").map(Number);

    graph[x].push(y);
    graph[y].push(x);
  }

  console.log(isBipartite(graph, vertex) ? "YES" : "NO");

  i += edgeNumber;
}
