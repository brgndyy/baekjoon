const input = `6 5
1 2
2 5
5 1
3 4
4 6`.split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  let [x, y] = input.shift().split(" ").map(Number);

  graph[x].push(y);
}

console.log(graph);
