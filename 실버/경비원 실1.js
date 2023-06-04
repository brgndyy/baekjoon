const input = `10 5
3
1 4
3 2
2 8
2 3`.split("\n");

let [W, H] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let totalLength = 2 * (W + H);
let storeNum = Number(input.shift());
let dgPos = input
  .pop()
  .split(" ")
  .map((str) => Number(str));
dgPos = changeDirection(dgPos, W, H);

let answer = 0;

for (let i = 0; i < storeNum; i++) {
  let storePos = input[i].split(" ").map((str) => Number(str));
  storePos = changeDirection(storePos, W, H);

  let clockwise = Math.abs(dgPos - storePos);
  let counterclockwise = totalLength - clockwise;

  answer += Math.min(clockwise, counterclockwise);
}

console.log(answer);

function changeDirection(pos, W, H) {
  let [direction, distance] = pos;
  switch (direction) {
    case 1:
      return distance;
    case 2:
      return 2 * W + H - distance;
    case 3:
      return 2 * W + 2 * H - distance;
    case 4:
      return W + distance;
  }
}
