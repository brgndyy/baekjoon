const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let numArr = input.map((num) => Number(num)).sort((a, b) => a - b);

let maxLine = numArr.pop(); // 3

let filteredArr = numArr.reduce((a, b) => a + b, 0); // 3

while (maxLine > filteredArr) {
  maxLine--;
}

console.log(maxLine - 1 + filteredArr);
