const input = `2 4
CAAB
ADCB`.split("\n");

let [R, C] = input.shift().split(" ").map(Number);
let mapArr = input.map((map) => map.split(""));
let visited = new Set();
let maxCount = 0;

let dx = [1, 0, -1, 0];
let dy = [0, -1, 0, 1];

function dfs(x, y, count) {
  maxCount = Math.max(maxCount, count);

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < R &&
      ny < C &&
      !visited.has(mapArr[nx][ny])
    ) {
      visited.add(mapArr[nx][ny]);
      dfs(nx, ny, count + 1);
      visited.delete(mapArr[nx][ny]);
    }
  }
}
visited.add(mapArr[0][0]);
dfs(0, 0, 1);

console.log(maxCount);
