const input = `4 11
802
743
457
539`.split("\n");

const [K, N] = input.shift().split(" ").map(Number);

const arr = input.map(Number).sort((a, b) => a - b);

let start = 1;

let answer = 0;

let end = arr[arr.length - 1];

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let sum = 0;

  for (let x of arr) {
    sum += Math.floor(x / mid);
  }

  if (sum >= N) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(answer);
