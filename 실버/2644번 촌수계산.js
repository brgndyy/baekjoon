const input = `9
8 6
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`.split("\n");

const n = Number(input[0]);

const [targetParent, targetChild] = input[1].split(" ").map(Number);

const m = Number(input[2]);

const graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(false);

for (let i = 3; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  graph[x].push(y);
  graph[y].push(x);
}

bfs();

function bfs() {
  const queue = [[targetParent, 0]];
  visited[targetParent] = true;

  while (queue.length) {
    const [current, numberOfRelatives] = queue.shift();

    if (current === targetChild) {
      console.log(numberOfRelatives);
      return;
    }

    for (const next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, numberOfRelatives + 1]);
      }
    }
  }

  console.log(-1);
}
