const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

let balls = Array.from({ length: N }, (_, index) => index + 1);

for (let i = 1; i <= M; i++) {
  let startNum = Number(input[i].split(" ")[0]); // 1
  let endNum = Number(input[i].split(" ")[1]); // 6
  let midNum = Number(input[i].split(" ")[2]); // 4

  let sliceArr = balls
    .slice(midNum - 1, endNum)
    .concat(balls.slice(startNum - 1, midNum - 1));

  balls.splice(startNum - 1, endNum - startNum + 1, ...sliceArr);
}

console.log(balls.join(" "));
