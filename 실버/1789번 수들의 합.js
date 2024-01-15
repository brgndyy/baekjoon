const input = `200`;

let N = Number(input);

let count = 1;

let answer = [];

while (N > 0) {
  if (N - count < 0) {
    const poppedNum = answer.pop();
    const totalNumber = N + poppedNum;
    answer.push(totalNumber);

    break;
  }

  N -= count;

  answer.push(count);

  count++;
}

console.log(answer.length);
