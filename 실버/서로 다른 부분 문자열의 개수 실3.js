const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let strMap = new Map();

for (let i = 0; i < input.length; i++) {
  for (let j = input.length; j > i; j--) {
    let sliceStr = input.slice(i, j);

    if (strMap.get(sliceStr)) {
      continue;
    } else {
      strMap.set(sliceStr, 1);
    }
  }
}

console.log(strMap.size);
