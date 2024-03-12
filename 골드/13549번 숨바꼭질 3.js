// const input = `5 17`;

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = input.split(" ").map(Number);

let MAX = 100000;

const visited = Array(MAX + 1).fill(false);

function bfs() {
  const queue = [[N, 0]];
  visited[N] = true;

  while (queue.length) {
    const [targetPosition, currentCount] = queue.shift();

    if (targetPosition === K) {
      return currentCount;
    }

    for (let next of [
      targetPosition - 1,
      targetPosition + 1,
      targetPosition * 2,
    ]) {
      if (next >= 0 && next <= MAX && !visited[next]) {
        visited[next] = true;

        if (next === targetPosition * 2) {
          queue.unshift([next, currentCount]);
        }

        if (next === targetPosition - 1 || next === targetPosition + 1) {
          queue.push([next, currentCount + 1]);
        }
      }
    }
  }
}

console.log(bfs());
