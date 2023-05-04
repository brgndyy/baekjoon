const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
let hash = new Map();

let splitInputArr = input[0].split(" ");

let newInputArr = [...new Set(splitInputArr)].sort(
  (a, b) => Number(b) - Number(a)
);

newInputArr.forEach((str, index) =>
  hash.set(str, newInputArr.length - 1 - index)
);

let answer = splitInputArr.map((str) => hash.get(str));

console.log(answer.join(" "));
