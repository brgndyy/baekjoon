const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

function fib(n, memo = []) {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n === 0) {
    return 0;
  } else if (n <= 2) {
    return 1;
  }

  let res = fib(n - 1, memo) + fib(n - 2, memo);

  memo[n] = res;

  return res;
}

console.log(fib(N));
