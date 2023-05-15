const input = `5
1
3
7
13
17`.split("\n");

let N = Number(input.shift());

let sortedInput = input.map((str) => Number(str)).sort((a, b) => a - b);

console.log(sortedInput);
