const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let shiftInput = input.shift();
let answer = [];
let sumArr = [];

let [N, M] = [
  Number(shiftInput.split(" ")[0]),
  Number(shiftInput.split(" ")[1]),
];

let A = [];
let B = [];

for (let i = 0; i < N; i++) {
  let splitInput = input
    .shift()
    .split(" ")
    .map((str) => Number(str));

  A.push(splitInput);
}

let K = input
  .shift()
  .split(" ")
  .map((str) => Number(str))[1];

for (let j = 0; j < M; j++) {
  let splitInput = input
    .shift()
    .split(" ")
    .map((str) => Number(str));

  B.push(splitInput);
}

for (let k = 0; k < A.length; k++) {
  for (let z = 0; z < B[0].length; z++) {
    let sum = 0;
    for (let t = 0; t < B.length; t++) {
      sum += A[k][t] * B[t][z];
    }

    sumArr.push(sum);
  }

  answer.push(sumArr);
  sumArr = [];
}

for (let i = 0; i < answer.length; i++) {
  console.log(answer[i].join(" "));
}
