const input = `10 7`;

let [N, K] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];

let arr = Array(N + 1)
  .fill(true)
  .fill(false, 0, 2);

let count = 0;
let answer = 0;

for (let i = 2; i <= N; i++) {
  if (arr[i] === true) {
    arr[i] = false;
    count++;
  }

  if (count === K) {
    answer = i;
    break;
  }

  for (let j = i * i; j <= N; j += i) {
    if (arr[j] === true) {
      arr[j] = false;
      count++;
    }

    if (count === K) {
      answer = j;
      break;
    }
  }
}

console.log(answer);
