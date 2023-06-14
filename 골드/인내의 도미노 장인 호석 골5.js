const input = `5 5 3
1 1 1 1 1
1 2 2 1 1
3 1 2 2 2
1 3 2 1 1
1 3 3 1 1
3 1 E
3 5
5 3 N
3 3
5 2 N
3 1`.split("\n");

let [N, M, R] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let dominoBoard = [];

for (let i = 0; i < N; i++) {
  let board = input
    .shift()
    .split(" ")
    .map((str) => Number(str));
  dominoBoard.push(board);
}

let attackBoard = [...dominoBoard];

for (let i = 0; i < input.length; i++) {
  // 공격일때
  if (i % 2 === 0) {
    let [HPos, WPos, direction] = [
      Number(input[i].split(" ")[0]),
      Number(input[i].split(" ")[1]),
      input[i].split(" ")[2],
    ];

    // let attackPos = [HPos - 1, WPos - 1];

    if (direction === "E") {
    } else if (direction === "W") {
    } else if (direction === "N") {
      for (let i = HPos - 1; i >= 0; i--) {
        if (attackBoard[HPos - 1][WPos - 1] === false) {
        }
      }
    } else if (direction === "S") {
    }
  }
  // 수비일때
  else if (i % 2 !== 0) {
    let defencePos = [
      Number(input[i].split(" ")[0]) - 1,
      Number(input[i].split(" ")[1]) - 1,
    ];
  }
}

console.log(attackBoard);
