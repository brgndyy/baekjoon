const input = `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`.split("\n");

function isBipartiteBfs(graph, vertex) {
  let color = Array(vertex + 1).fill(0);

  function bfs(vertex) {
    const queue = [];
    queue.push(vertex);
    color[vertex] = 1;

    while (queue.length) {
      const targetVertex = queue.shift();

      for (let next of graph[targetVertex]) {
        if (color[next] === 0) {
          color[next] = -color[targetVertex];
          queue.push(next);
        } else if (color[next] === color[targetVertex]) {
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
  const [V, E] = input[i].split(" ").map(Number);

  let graph = Array.from({ length: V + 1 }, () => []);

  for (let j = i + 1; j <= i + E; j++) {
    let [x, y] = input[j].split(" ").map(Number);

    graph[x].push(y);
    graph[y].push(x);
  }
  console.log(isBipartiteBfs(graph, V) ? "YES" : "NO");
  i += E;
}
