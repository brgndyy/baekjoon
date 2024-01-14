const input = `55-50+40`;

const splitedMinusInput = input.split("-");

let answer = 0;

for (let i = 0; i < splitedMinusInput.length; i++) {
  const sum = splitedMinusInput[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (i === 0) {
    answer += sum;
  } else {
    answer -= sum;
  }
}

console.log(answer);
