const places = [
  ["POOOP", "OXXOX", "OPXPX", "OXXOX", "OPXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

let result = [];

let N = 5;
let M = 5;
let flag = false;

for (let i = 0; i < N; i++) {
  let placeArr = places[i].map((str) => str.split(""));
  let seatPos = [];

  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (placeArr[j][k] === "P") {
        flag = true;
        seatPos.push([j, k]);
      }
    }
  }

  for (let i = 0; i < seatPos.length; i++) {
    for (let j = i + 1; j < seatPos.length; j++) {
      if (
        Math.abs(seatPos[i][0] - seatPos[j][0]) +
          Math.abs(seatPos[i][1] - seatPos[j][1]) <=
        2
      ) {
      }
    }
  }

  if (flag === false) {
    result.push(1);
  }
}
