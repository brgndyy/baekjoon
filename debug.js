const input = `5 20
4 42 40 26 46`.split("\n");

const [N, target] = input.shift().split(" ").map(Number);

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = arr[0];

let answer = 0;

let end = arr[arr.length - 1];

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let sum = 0;

  for (let x of arr) {
    if (x > mid) {
      sum += x - mid;
    }
  }

  // 나무를 더 많이 잘랐다면
  if (sum >= target) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
