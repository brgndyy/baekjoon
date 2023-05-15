const input = `5
6
8
10
12
100`.split("\n");

let T = Number(input.shift());

let numArr = input.map((str) => Number(str));
let answer = [];

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 0; i < numArr.length; i++) {
  let halfNum = numArr[i] / 2;
  let count = 0;

  for (let j = 2; j <= halfNum; j++) {
    if (isPrime(j)) {
      if (isPrime(numArr[i] - j) && j + numArr[i] + j === numArr[i]) {
        count++;
      } else {
        continue;
      }
    }
  }

  answer.push(count);
}

console.log(answer);
