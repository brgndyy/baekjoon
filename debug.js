const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [N, K] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];
let measureArr = [];

for (let i = 1; i <= Math.floor(N / 2); i++) {
  if (N % i === 0) {
    measureArr.push(i);
  }
}

measureArr.push(N);

measureArr[K - 1] == undefined
  ? console.log(0)
  : console.log(measureArr[K - 1]);
