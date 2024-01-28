const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = input.shift().split(" ").map(Number);

const arr = input.map(Number).sort((a, b) => a - b);

let start = 1;

let end = arr[arr.length - 1];

let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let sum = 0;

  for (let x of arr) {
    sum += Math.floor(x / mid);
  }

  // 만든 랜선의 합이 더 짧다면
  if (N > sum) {
    end = mid - 1;
  } else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);
