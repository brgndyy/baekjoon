const input = `4
1
3
7
13`.split("\n");

const sortInput = input.map((str) => Number(str)).sort((a, b) => a - b);

console.log(sortInput);
