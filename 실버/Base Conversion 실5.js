const input = `17 8
2
2 16`.split("\n");

let [A, B] = input
  .shift()
  .split(" ")
  .map((str) => parseInt(str));
let m = Number(input.shift());

let numArr = input
  .shift()
  .split(" ")
  .map((str) => Number(str));
let decimalNum = numArr.reduce(
  (acc, cur, idx) => acc + cur * Math.pow(A, m - idx - 1),
  0
);
let answer = [];

while (decimalNum !== 0) {
  answer.unshift(decimalNum % B);
  decimalNum = Math.floor(decimalNum / B);
}

if (answer.length === 0) answer.push(0);

console.log(answer.join(" "));
