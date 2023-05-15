let input = `3
6
20
100`.split("\n");

let N = Number(input.shift());

let numArr = input.map((str) => Number(str));
let answer = [];

// 소수를 판별하는 함수
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < numArr.length; i++) {
  let num = numArr[i];

  // 주어진 정수보다 크거나 같은 소수 찾기
  while (!isPrime(num)) {
    num++;
  }

  answer.push(num);
}

console.log(answer.join("\n"));
