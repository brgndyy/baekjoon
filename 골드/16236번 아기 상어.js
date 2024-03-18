const input = `4
4 3 2 1
0 0 0 0
0 0 9 0
1 2 3 4`.split("\n");

// 아기 상어 기본 크기 2
// 본인의 무게만큼 물고기를 먹어야지 무게가 +1 된다. (2라면 2마리, 3이라면 3마리)
// 자기보다 작은 물고기만 먹을수 있다.
// 자기와 무게가 같은 물고기는 먹을순 없지만, 해당 칸을 지나갈수는 있다.
// 자기보다 큰 물고기는 못먹고 지나갈수도 없다.
// 먹을수 있는 물고기가 1마리보다 많으면 거리가 가장 가까운 물고기를 먹으러간다
// 거리가 가까운 물고기가 많다면 가장 위에 있는 물고기를 먹는다.
// 그러한 물고기가 여러마리라면, 가장 왼쪽에 있는 물고기를 먹는다. (?)
// 물고기를 먹으면 해당 칸은 빈칸이 된다.
// 더이상 먹을수 있는 물고기가 없다면 끝

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

const N = Number(input[0]);

const field = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);

  field.push(line);
}

const queue = [];

for (let i = 0; i < field.length; i++) {
  for (let j = 0; j < field[i].length; j++) {
    if (field[i][j] === 9) {
      queue.push({ position: [i, j], weight: 2, count: 0 });
    }
  }
}

function hasEatableFish(fishWeight) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (fishWeight > field[i][j]) {
        return true;
      }
    }
  }

  return false;
}

function bfs() {
  while (queue.length) {
    const { position, weight, count } = queue.shift();
    const [positionX, positionY] = position;
  }
}

console.log(queue);
