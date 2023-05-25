let input = `10`;

let N = Number(input);

let result = 0;
let len = 1;
let num = 10;

for (let i = 1; i <= input; i++) {
  if (i % num === 0) {
    len++;
    num *= 10;
  }
  result += len;
}
console.log(result);
