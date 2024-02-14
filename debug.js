const input = `9
> < < < > > > < <`.split("\n");

let K = Number(input.shift());

let inqualitySignArr = input[0].split(" ");

let numArr = Array.from({ length: 10 }, (_, index) => index);

let answerArr = [];

function dfs(depth) {}
