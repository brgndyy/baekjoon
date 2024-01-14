const input = `18`;

const N = Number(input);

let answer = 0;

while (N > 0) {
  N -= 3;

  answer++;

  if (N % 5 === 0) {
    answer += N / 5;
    N = N / 5;
  }
}

console.log(answer);
