const input = `11 10
7 4 0
1 1 1 1 1 1 1 1 1 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 1 1 1 1 0 1
1 0 0 1 1 0 0 0 0 1
1 0 1 1 0 0 0 0 0 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 0 0 0 1
1 1 1 1 1 1 1 1 1 1`.split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let [r, c, d] = input.shift().split(" ").map(Number);

let roomArr = input.map((row) => row.split(" ").map(Number));

let count = 0;
let answer = 1;

roomArr[r][c] = 2;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while (true) {
  if (count === 4) {
    let back = (d + 2) % 4;
    let nx = r + dx[back];
    let ny = c + dy[back];
    if (roomArr[nx][ny] === 1) {
      break;
    }
    r = nx;
    c = ny;
    count = 0;
  }

  d = (d + 3) % 4;
  let nx = r + dx[d];
  let ny = c + dy[d];

  if (roomArr[nx][ny] === 0) {
    r = nx;
    c = ny;
    roomArr[r][c] = 2;
    answer++;
    count = 0;
  } else {
    count++;
  }
}

console.log(answer);
