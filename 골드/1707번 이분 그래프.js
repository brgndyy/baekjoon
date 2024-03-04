const input = `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`.split("\n");

// 이분 그래프인지 판단하는 함수
function isBipartiteBFS(graph, Vertex) {
  let color = Array(Vertex + 1).fill(0);

  function bfs(start) {
    let queue = [start];
    color[start] = 1; // 시작 정점에 색상 1을 칠함

    while (queue.length > 0) {
      let targetVertex = queue.shift();

      for (let next of graph[targetVertex]) {
        if (color[next] === 0) {
          color[next] = -color[v]; // 인접 정점에 반대 색상 칠하기
          queue.push(next);
        } else if (color[next] === color[targetVertex]) {
          return false;
        }
      }
    }
    return true;
  }

  for (let v = 1; v <= Vertex; v++) {
    // BFS 탐색을 했을때 이분 그래프가 아니라면 false 반환
    if (color[v] === 0 && !bfs(v)) return false;
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
  console.log(isBipartiteBFS(graph, V) ? "YES" : "NO");
  i += E;
}
