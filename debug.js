const input = `4 2
2 1 2
4 3 2
1 4 3
1 2
3 2`.split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let graph = Array.from({ length: N + 1 }, () => []);


// 각 좌표의 비용을 담은 graph 배열 생성
for (let i = 0; i < N - 1; i++) {
  const [x, y, cost] = input.shift().split(" ").map(Number);

  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

for(let i = 0; i < M; i++){
    let [x, y] = input.shift().split(' ').map(Number);

    let visited = Array(N+1).fill(false);
    let distance = Array(N+1).fill(-1);

    dfs(x, 0, visited, distance);


}

function dfs(x, y, visited, totalCost = 0){
    if(visis)
}



console.log(graph);
