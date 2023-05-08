// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();

let input = `5 2`;
let N = Number(input.split(" ")[0]);
let K = Number(input.split(" ")[1]);

let numArr = Array.from({ length: N - K + 1 }, (_, index) => index + 1);
let answer = 0;

numArr.forEach((num) => {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count += i;
  }
  answer += count;
});

console.log(answer);
