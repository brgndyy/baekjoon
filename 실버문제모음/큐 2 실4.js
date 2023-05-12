const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let queue = [];
let answer = [];

for (let i = 1; i <= N; i++) {
  let splitWord = input[i].split(" ");

  if (splitWord[0] === "push") {
    queue.push(Number(splitWord[1]));
  } else if (splitWord[0] === "front") {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[0]);
    }
  } else if (splitWord[0] === "back") {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[queue.length - 1]);
    }
  } else if (splitWord[0] === "size") {
    answer.push(queue.length);
  } else if (splitWord[0] === "empty") {
    if (queue.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (splitWord[0] === "pop") {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue.shift());
    }
  }
}
console.log(answer.join("\n"));
