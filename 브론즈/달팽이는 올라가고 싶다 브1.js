const input = `2 1 5`;

const A = Number(input[0]);
const B = Number(input[1]);
const V = Number(input[2]);

let day = 0;
let totalHeight = 1;

while (totalHeight < V) {
  totalHeight += A;

  if (totalHeight >= B) {
    break;
  }

  totalHeight -= B;

  day++;
}

console.log(day);
