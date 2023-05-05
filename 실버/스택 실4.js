const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);

let arr = [];
let answer = [];

for (let i = 1; i <= N; i++) {
  let splitType = input[i].split(" ");

  if (splitType[0] === "push") {
    arr.push(splitType[1]);
  } else if (splitType[0] === "top") {
    if (arr.length === 0) {
      answer.push(-1);
    } else {
      answer.push(arr[arr.length - 1]);
    }
  } else if (splitType[0] === "size") {
    answer.push(arr.length);
  } else if (splitType[0] === "empty") {
    if (arr.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (splitType[0] === "pop") {
    if (arr.length === 0) {
      answer.push(-1);
    } else {
      answer.push(arr.pop());
    }
  }
}

console.log(answer.join("\n"));
