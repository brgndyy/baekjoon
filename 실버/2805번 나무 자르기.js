const input = `4 7
20 15 10 17`.split("\n");

const [N, target] = input.shift().split(" ").map(Number);

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 1;

let end = arr[arr.length - 1];

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let sum = 0;

  for (let x of arr) {
    sum += x - mid;
  }

  if (sum > target) {
    end = mid - 1;
  } else if (sum < target) {
    start = mid + 1;
  } else if (sum === target) {
    answer = sum;
    break;
  }
}

console.log(answer);
