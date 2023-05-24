const input = `10`;

let N = Number(input);

function fibonaci(n, memo = []) {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  let res = fibonaci(n - 1, memo) + fibonaci(n - 2, memo);

  memo[n] = res;

  return res;
}

console.log(fibonaci(10));
