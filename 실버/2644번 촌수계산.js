const input = `9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`.split("\n");

const n = Number(input[0]);
const [targetX, targetY] = input[1].split(" ").map(Number);
const m = Number(input[2]);
const graph = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(false);

for (let i = 3; i < input.length; i++) {
  const [parent, child] = input[i].split(" ").map(Number);

  graph[parent].push(child);
  graph[child].push(parent);
}

function bfs() {
  const queue = [[targetX, 0]];
  visited[targetX] = true;

  while (queue.length) {
    const [currentX, count] = queue.shift();

    if (currentX === targetY) {
      return count;
    }

    for (let next of graph[currentX]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, count + 1]);
      }
    }
  }

  return -1;
}

console.log(bfs());
