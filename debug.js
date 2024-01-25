const input = `5
70 80 30 40 100
450`.split("\n");

const N = Number(input.shift());

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const M = Number(input[1]);

let answer = 0;

let sum = arr.reduce((a, b) => a + b, 0);

let start = 1;

let end = arr[arr.length - 1];

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let sum = 0;

  arr.forEach((num) => {
    if (num > mid) {
      sum += mid;
    } else {
      sum += num;
    }
  });

  if (M >= sum) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
