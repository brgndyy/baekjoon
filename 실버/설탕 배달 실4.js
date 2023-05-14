const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let count = 0;

while (N % 5 !== 0) {
  N -= 3;

  count++;
}

count += N % 5;

console.log(count);

// 5 한번 빼주고 count ++;
// 3 한번 빼주고 count ++;
