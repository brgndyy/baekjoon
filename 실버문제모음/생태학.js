// const input = `Red Alder
// Ash
// Aspen
// Basswood
// Ash
// Beech
// Yellow Birch
// Ash
// Cherry
// Cottonwood
// Ash
// Cypress
// Red Elm
// Gum
// Hackberry
// White Oak
// Hickory
// Pecan
// Hard Maple
// White Oak
// Soft Maple
// Red Oak
// Red Oak
// White Oak
// Poplan
// Sassafras
// Sycamore
// Black Walnut
// Willow`
//   .split("\n")
//   .sort();

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .sort();

let totalTreeNum = Number(input.length);
let hash = new Map();
let answer = "";

for (let i = 0; i < input.length; i++) {
  hash.set(input[i], (hash.get(input[i]) || 0) + 1);
}

hash.forEach((value, key, index) => {
  let totalRate = ((value / totalTreeNum) * 100).toFixed(4);

  answer += key + " " + totalRate + "\n";
});

console.log(answer);
