const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

let words = new Map();
let checkWords = [];
let count = 0;

for (let i = 1; i <= N; i++) {
  words.set(input[i], 1);
}

for (let j = N + 1; j <= N + M; j++) {
  checkWords.push(input[j]);
}

checkWords.forEach((str) => {
  if (words.get(str) > 0) {
    count++;
  }
});

console.log(count);
