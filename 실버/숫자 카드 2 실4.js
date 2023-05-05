const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.split("\n");

const N = Number(input[0]);

let numberCards = input[1].split(" ");

let M = Number(input[2]);

let findCards = input[3].split(" ");

let cardsMap = new Map();

numberCards.forEach((card) => {
  cardsMap.set(card, cardsMap.get(card) + 1 || 0);
});

console.log(cardsMap);
