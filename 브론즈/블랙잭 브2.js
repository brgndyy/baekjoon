const input = `5 21
5 6 7 8 9`.split("\n");

const N = Number(input[0].split(" ")[0]); // 5
const M = Number(input[0].split(" ")[1]); // 21

let inputArr = input[1].split(" ").map((str) => Number(str));

console.log(inputArr);
