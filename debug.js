const input = `5 17`;

const [N, K] = input.split(" ").map(Number);

const MAX = 100000;

const visited = Array(MAX + 1).fill(false);

function bfs() {
  const queue = [];
  queue.push([N, 0]);
  visited[N] = true;
  while (queue.length) {
    const [targetNumber, count] = queue.shift();

    if (targetNumber === K) {
      return count;
    }

    for (let next of [targetNumber - 1, targetNumber + 1, targetNumber * 2]) {
      if (!visited[next] && next >= 0 && next <= MAX) {
        visited[next] = true;
        if (next === targetNumber * 2) {
          queue.unshift([next, count]);
        } else {
          queue.push([next, count + 1]);
        }
      }
    }
  }
}

console.log(bfs());
