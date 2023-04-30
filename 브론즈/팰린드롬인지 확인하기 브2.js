const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split();

let answer;

let reverseInput = input.split("").reverse().join("");

input === reverseInput ? (answer = 1) : (answer = 0);

console.log(answer);
