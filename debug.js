let input = `5
100
6
8
10
12`.split("\n");

let T = Number(input.shift());

let inputNumArr = input.map((str) => Number(str));
let answer = [];

let maxNum = Math.max(...inputNumArr);

let numArr = Array(maxNum).fill(true).fill(false, 0, 2);

for (let i = 2; i <= numArr.length; i++) {
  for (let j = i * i; j <= numArr.length; j += i) {
    numArr[j] = false;
  }
}

for (let i = 0; i < inputNumArr.length; i++) {
  let count = 0;

  for (let j = 2; j <= inputNumArr[i] / 2; j++) {
    if (numArr[j] && numArr[inputNumArr[i] - j]) {
      count++;
    }
  }

  answer.push(count);
}

console.log(answer);
