const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let cityDistanceArr = input[1].split(" ").map(Number);

let oilPriceArr = input[2].split(" ").map(Number);

let answer = BigInt(0);

let minValue = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
  if (oilPriceArr[i] < minValue) {
    minValue = oilPriceArr[i];
  } else if (oilPriceArr[i] > minValue) {
    oilPriceArr[i] = minValue;
  }
}

for (let i = 0; i < N - 1; i++) {
  answer += BigInt(cityDistanceArr[i]) * BigInt(oilPriceArr[i]);
}

console.log(answer.toString());
