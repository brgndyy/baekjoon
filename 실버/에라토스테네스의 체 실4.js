const input = `15 12`;

let [N, K] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];

let arr = Array(N + 1)
  .fill(true)
  .fill(false, 0, 2);

let count = 0;
let answer = 0;

for (let i = 2; i <= Math.sqrt(N); i++) {
  count++;

  if (count === K) {
    answer = i;
    break;
  }
  if (arr[i]) {
    for (let j = i * i; j <= N; j += i) {
      if (j % arr[i] === 0) {
        arr[j] = false;
        count++;
        if (count === K) {
          answer = j;
          break;
        }
      }
    }
  }
}

console.log(answer);
