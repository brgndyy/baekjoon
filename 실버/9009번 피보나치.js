const input = `4
100
200
12345
1003`.split("\n");

const N = Number(input[0]);

let numArr = [];

let answer = [];

function isPerfectSquare(x) {
  let s = Math.sqrt(x);
  return s * s === x;
}

function isFibonacci(num) {
  if (num < 0) {
    return false;
  }

  return (
    isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
  );
}

for (let i = 1; i <= N; i += 1) {
  numArr.push(Number(input[i]));
}

for (let j = 0; j < N; j++) {
  let arr = [];
  let number = numArr[i];

  while (numArr[i] > 0) {
    if (!isFibonacci(numArr[i])) {
      numArr[i] -= 1;
    } else if (isFibonacci(numArr[i])) {
      number -= numArr[i];
      arr.push(numArr[i]);
    }
  }

  answer.push(arr);
}

console.log(answer);
