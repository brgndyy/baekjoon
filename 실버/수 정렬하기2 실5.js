const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift();

let inputArr = input.sort((a, b) => {
  if (Number(b) < Number(a)) {
    Number(b) - Number(a);
    console.log(a);
  } else {
    console.log(b);
  }
});
