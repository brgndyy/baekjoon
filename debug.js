const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const A = Number(input.split(" ")[0]);
const B = Number(input.split(" ")[1]);
const V = Number(input.split(" ")[2]);

let day = 0;
let totalHeight = 0;

while (totalHeight < V) {
  totalHeight += A;
  day += 1;

  if (totalHeight >= V) {
    break;
  }

  totalHeight -= B;
}

console.log(day);
