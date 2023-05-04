const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

let hash = new Map();

for (let i = 1; i <= n; i++) {
  let [name, state] = [input[i].split(" ")[0], input[i].split(" ")[1]];

  if (!hash.get(name)) {
    hash.set(name, state);
  } else if (hash.get(name) === "enter") {
    hash.set(name, "leave");
  } else if (hash.get(name) === "leave") {
    hash.set(name, "enter");
  }
}

let answerArr = [];

[...hash].forEach((arr) => arr[1] === "enter" && answerArr.push(arr[0]));

console.log(answerArr.sort().reverse().join("\n"));
