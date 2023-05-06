const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let answer = [];
let arr = [];

for (let i = 1; i <= N; i++) {
  let splitInput = input[i].split(" ")[0];

  if (splitInput === "push") {
    let num = Number(input[i].split(" ")[1]);
    arr.push(num);
  } else if (splitInput === "front") {
    if (arr.length === 0) {
      answer.push(-1);
    } else {
      answer.push(arr[0]);
    }
  } else if (splitInput === "back") {
    if (arr.length === 0) {
      answer.push(-1);
    } else {
      answer.push(arr[arr.length - 1]);
    }
  } else if (splitInput === "size") {
    answer.push(arr.length);
  } else if (splitInput === "pop") {
    if (arr.length === 0) {
      answer.push(-1);
    } else {
      answer.push(arr.shift());
    }
  } else if (splitInput === "empty") {
    if (arr.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  }
}

console.log(answer.join("\n"));
