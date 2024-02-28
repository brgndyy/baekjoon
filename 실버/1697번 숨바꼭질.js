const input = `5 17`;

const [N, K] = input.split(" ").map(Number);

let max = 50;

let visited = Array(max + 1).fill(0); // 각 위치까지의 최단 시간

let queue = [];

queue.push(N);

function bfs() {
  while (queue.length) {
    let targetNumber = queue.shift();

    if (targetNumber === K) {
      return visited[targetNumber];
    }

    for (let next of [targetNumber - 1, targetNumber + 1, targetNumber * 2]) {
      if (next < 0 || next >= max) {
        continue;
      }

      // 아직 방문을 하지 않았다면
      if (visited[next] === 0) {
        visited[next] = visited[targetNumber] + 1; // 최단거리에 1 더해주기
        queue.push(next);
      }
    }
  }
}

console.log(bfs());
