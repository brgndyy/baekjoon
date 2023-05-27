const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let splitInput = input.split("").sort();
let frontStack = [];
let backStack = [];
let testStack = [];
for (let i = 0; i < splitInput.length; i++) {
  if (i % 2 === 0) {
    frontStack.push(splitInput[i]);
  } else {
    backStack.unshift(splitInput[i]);
  }
}

let totalWord = [...frontStack].join("") + [...backStack].join("");

let splitTotalWord = totalWord.split("");
let length = splitTotalWord.length;

for (let j = 0; j < length; j++) {
  testStack.push(splitTotalWord.pop());
}

// let totalWord2 = testStack.join('')

if (testStack.join("") === totalWord) {
  console.log(totalWord);
} else {
  console.log("I'm Sorry Hansoo");
}
