const input = `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`.split("\n");

const testCase = Number(input[0]);

for (let i = 1; i < input.length; i++) {
  const [V, E] = input[i].split(" ").map(Number);
  const graph = Array.from({ length: V + 1 }, () => []);

  function isBipartiteGraph(graph, V) {
    const color = Array(V + 1).fill(0);

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
          }
          if (color[next] === color[targetVertex]) {
            return false;
          }
        }
      }

      return true;
    }

    for (let i = 1; i <= V; i++) {
      if (color[i] === 0 && !bfs(i)) {
        return false;
      }
    }

    return true;
  }

  for (let j = i + 1; j <= i + E; j++) {
    const [x, y] = input[j].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  console.log(isBipartiteGraph(graph, V) ? "YES" : "NO");

  i += E;
}
