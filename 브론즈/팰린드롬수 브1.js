const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let p1 = 0;
let answer = [];

while (input[p1] !== "0") {
  let str = input[p1];
  let reverse = input[p1].split("").reverse().join("");

  str === reverse ? answer.push("yes") : answer.push("no");

  p1++;
}

console.log(answer.join("\n"));
