const input = `3 3
1 1 0
1 1 1
1 0 1
1 1 1`.split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [startX, startY, startDir] = input[1].split(" ").map(Number);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const room = [];
for (let i = 2; i < input.length; i++) {
  room.push(input[i].split(" ").map(Number));
}

function cleanRoom(x, y, dir) {
  let cleanedCount = 0;
  const queue = [[x, y, dir]];
  room[x][y] = 2;
  cleanedCount++;

  while (queue.length) {
    let [cx, cy, cdir] = queue.pop();
    let found = false;

    for (let i = 0; i < 4; i++) {
      cdir = (cdir + 3) % 4; // 반시계 방향으로 회전
      let nx = cx + dx[cdir];
      let ny = cy + dy[cdir];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M && room[nx][ny] === 0) {
        queue.push([nx, ny, cdir]);
        room[nx][ny] = 2;
        cleanedCount++;
        found = true;
        break;
      }
    }

    if (!found) {
      let backDir = (cdir + 2) % 4;
      let bx = cx + dx[backDir];
      let by = cy + dy[backDir];

      if (bx >= 0 && by >= 0 && bx < N && by < M && room[bx][by] !== 1) {
        queue.push([bx, by, cdir]);
      } else {
        break;
      }
    }
  }
  return cleanedCount;
}

const result = cleanRoom(startX, startY, startDir);

console.log(result);
