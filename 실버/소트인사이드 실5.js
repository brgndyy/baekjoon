const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let splitInput = input
  .split("")
  .sort((a, b) => Number(b) - Number(a))
  .join("");

console.log(splitInput);
