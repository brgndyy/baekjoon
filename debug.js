let input = `10`;

let N = Number(input);

let answer = 0;
let len = 1;
let num = 10;

for (let i = 1; i <= N; i++) {
  if (i % num === 0) {
    len++;
    num *= 10;
  }

  answer += len;
}

console.log(answer);
