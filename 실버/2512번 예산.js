const input = `4
120 110 140 150
485`.split("\n");

const N = Number(input.shift());

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const M = Number(input[1]);

let answer = 0;

const sum = arr.reduce((a, b) => a + b, 0);

if (M > sum) {
  console.log(Math.max(...arr));
}

let start = arr[0];

let end = arr[arr.length - 1];

while (start < end) {
  let midValue = Math.floor((start + end) / 2); // 130

  let sum = 0;

  arr.forEach((num) => {
    if (num >= midValue) {
      sum += midValue;
    } else {
      sum += num;
    }
  });

  // 숫자 합이 M보다 크다면
  if (sum > M) {
    end = midValue;
  } else if (sum <= M) {
    answer = midValue;
  }
}

console.log(answer);
