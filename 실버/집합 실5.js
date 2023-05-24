const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let M = Number(input.shift());
let S = [];
let answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "all" || input[i] === "empty") {
    if (input[i] === "all") {
      S = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ];
    } else if (input[i] === "empty") {
      S = [];
    }
  } else {
    let [type, num] = [input[i].split(" ")[0], Number(input[i].split(" ")[1])];

    if (type === "add") {
      if (S.indexOf(num) === -1) {
        S.push(num);
      } else {
        continue;
      }
    } else if (type === "remove") {
      if (S.indexOf(num) !== -1) {
        S.splice(S.indexOf(num), 1);
      } else {
        continue;
      }
    } else if (type === "check") {
      if (S.indexOf(num) !== -1) {
        answer.push(1);
      } else {
        answer.push(0);
      }
    } else if (type === "toggle") {
      if (S.indexOf(num) !== -1) {
        S.splice(S.indexOf(num), 1);
      } else {
        S.push(num);
      }
    }
  }
}

console.log(answer.join("\n"));
