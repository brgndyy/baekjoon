const input = `7
15 11 4 8 5 2 4`.split("\n");

const N = Number(input.shift());

const arr = input[0].split(" ").map(Number).reverse();

console.log(arr);
