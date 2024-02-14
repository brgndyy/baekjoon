const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [R, C] = input.shift().split(" ").map(Number);

const mapArr = input.map((str) => str.split(""));

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let visited = new Set();

let maxCount = 1;

function dfs(depth, x, y) {
  maxCount = Math.max(maxCount, depth);

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
      dfs(depth + 1, nx, ny);
      visited.delete(mapArr[nx][ny]);
    }
  }
}

visited.add(mapArr[0][0]);

dfs(1, 0, 0);

console.log(maxCount);
