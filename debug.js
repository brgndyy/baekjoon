const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let numArr = [];

let answer = [];

for (let i = 1; i <= N; i++) {
  numArr.push(Number(input[i]));
}

function makeFibonacciArr(number) {
  const fib = [0, 1];

  while (fib[fib.length - 1] < number) {
    const sum = fib[fib.length - 1] + fib[fib.length - 2];

    fib.push(sum);
  }

  return fib;
}

for (let j = 0; j < N; j++) {
  let number = numArr[j];
  let arr = [];

  const fibonacciArr = makeFibonacciArr(number);
  let fibIndex = fibonacciArr.length - 1;

  while (number > 0) {
    if (number - fibonacciArr[fibIndex] >= 0) {
      arr.push(fibonacciArr[fibIndex]);
      number -= fibonacciArr[fibIndex];
    }
    fibIndex--;
  }

  answer.push(arr);
}

answer.forEach((answer) => console.log(answer.sort((a, b) => a - b).join(" ")));
