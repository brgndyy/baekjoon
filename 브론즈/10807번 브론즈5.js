const input = `11
1 4 1 2 4 2 4 2 3 4 4
2`.split("\n");

let N = Number(input[0]);

const numArr = input[1].split(" ").map((str) => Number(str));
const v = Number(input[2]); // 2

let filteredArr = numArr.filter((num) => num === v);

console.log(filteredArr);
