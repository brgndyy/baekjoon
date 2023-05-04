const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift();

let realInput = [...new Set(input)].sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  } else {
    return a.length - b.length;
  }
});

console.log(realInput.join("\n"));

//['i', '13', 'no', 'it', 'im', 'but', 'wont', 'more', 'wait', 'yours', 'cannot', 'hesitate']
