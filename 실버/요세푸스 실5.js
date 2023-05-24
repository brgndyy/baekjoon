const input = `7 3`;

let [N, K] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];

let numArr = Array.from({ length: N }, (_, index) => index + 1);

let answer = [];

while (answer.length !== N) {
  if (K > N) {
    K = K % N;
  }

  answer.push(numArr[K - 1]);

  K += K;
}

console.log(answer);
