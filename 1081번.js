const input = `5 4
1 2
3 4
1 4
2 2`.split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

const ballsArr = Array.from({ length: N }, (_, index) => index + 1);

console.log;
