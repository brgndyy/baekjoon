const input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.split("\n");

let N = Number(input.shift());
let M = Number(input.shift());

// let graph = Array(N + 1).fill([]); // 이러면 모두 같은 주소값을 갖는 배열이 되어버린다.
let graph = Array.from({ length: N + 1 }, () => []);

let visited = Array(N + 1).fill(0);

let answer = 0;

for (let i = 0; i < M; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(vertex) {
  visited[vertex] = true;
  answer++;

  for (let x of graph[vertex]) {
    // 더 깊이 탐색하기 위해 반복문
    if (!visited[x]) {
      // 방문처리가 되어있지 않다면
      dfs(x);
    }
  }
}

dfs(1);

console.log(answer - 1); // 1번 노드는 제외해야하기때문에 -1을 해준다.
