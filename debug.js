const input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.split("\n");

const computerNumber = Number(input.shift());

const computerPairNumber = Number(input.shift());

const computerArr = input.map((computer) => computer.split(" ").map(Number));

let visited = Array(computerPairNumber).fill(false);
