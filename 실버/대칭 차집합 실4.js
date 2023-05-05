const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const aArr = input[1].split(" ");
const aMap = new Map();
const bArr = input[2].split(" ");
const bMap = new Map();
let count = 0;

aArr.forEach((num) => aMap.set(num, aMap.get(num) + 1 || 1));
bArr.forEach((num) => bMap.set(num, bMap.get(num) + 1 || 1));

aMap.forEach((value, key) => {
  if (bMap.get(key)) {
    aMap.set(key, value - 1);
  }
});

bMap.forEach((value, key) => {
  if (aMap.get(key) || aMap.get(key) === 0) {
    bMap.set(key, value - 1);
  }
});

aMap.forEach((value, key) => aMap.get(key) && count++);
bMap.forEach((value, key) => bMap.get(key) && count++);

console.log(count);
