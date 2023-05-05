const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let numberCards = input[1].split(" ");

let M = Number(input[2]);

let findCards = input[3].split(" ");

let cardsMap = new Map();

let answer = [];

numberCards.forEach((card) => {
  cardsMap.set(card, cardsMap.get(card) + 1 || 1);
});

findCards.forEach((card) => answer.push(cardsMap.get(card) || 0));

console.log(answer.join(" "));
