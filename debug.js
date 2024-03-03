const [N, K] = `5 17`.split(" ").map(Number);

const MAX = 100000;

const visitedHistory = Array(MAX + 1).fill(0);

let answer = 1;

let queue = [N];

visitedHistory[N] = 1;

function bfs() {
  while (queue.length) {
    const targetNumber = queue.shift();

    if (targetNumber === K) {
      return visitedHistory[targetNumber] - 1;
    }

    for (let next of [targetNumber - 1, targetNumber + 1, targetNumber * 2]) {
      if (next < 0 || next > MAX) {
        continue;
      }

      if (visitedHistory[next] === 0) {
        queue.push(next);
        visitedHistory[next] = visitedHistory[targetNumber] + 1;
      }
    }
  }
}

console.log(bfs());
