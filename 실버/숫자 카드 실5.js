const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let cardNum = input[1].split(" ");

let M = Number(input[2]);

let checkCards = input[3].split(" ");

let hash = new Map();

cardNum.forEach((str) => hash.set(str, 1));

let answer = checkCards.map((str) => (hash.get(str) ? hash.get(str) : 0));

console.log(answer.join(" "));
