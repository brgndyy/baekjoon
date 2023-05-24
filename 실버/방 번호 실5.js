const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = input.split("");

let numMap = new Map();

for (let i = 0; i < N.length; i++) {
  if (N[i] === "6" || N[i] === "9") {
    N[i] = "sixOrNine";
    numMap.set(N[i], numMap.get(N[i]) + 1 || 1);
  } else {
    numMap.set(N[i], numMap.get(N[i]) + 1 || 1);
  }
}

let answerSet = 0;

if (numMap.has("sixOrNine")) {
  numMap.set("sixOrNine", Math.ceil(numMap.get("sixOrNine") / 2));
}

let sortedMap = [...numMap].sort((a, b) => b[1] - a[1]);

console.log(sortedMap[0][1]);
