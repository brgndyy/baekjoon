const input = `4 2
2 1 2
4 3 2
1 4 3
1 2
3 2`.split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < N - 1; i++) {
  const [x, y, cost] = input.shift().split(" ").map(Number);

  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(start, end, visited, totalCost = 0) {
  // 시작 노드부터 탐색을 시작하여 타겟노드에 닿게 된다면 누적된 cost를 반환한다.
  if (start === end) {
    return totalCost;
  }
  // 방문 처리
  visited[start] = true;

  // 해당 기준 노드에서 다음 노드와 비용을 탐색을 한다.
  for (let [next, cost] of graph[start]) {
    // 만약 다음 노드를 방문하지 않은 상태라면
    if (!visited[next]) {
      // dfs를 통해 한번 더 탐색한다.
      const result = dfs(next, end, visited, totalCost + cost);

      if (result) {
        return result;
      }
    }
  }
}

for (let i = 0; i < M; i++) {
  let [x, y] = input.shift().split(" ").map(Number);
  const visited = new Array(N + 1).fill(false);
  let totalCost = 0;

  let answer = dfs(x, y, visited, totalCost);

  console.log(answer);
}
