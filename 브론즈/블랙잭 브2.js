const input = `10 500
93 181 245 214 315 36 185 138 216 295`.split("\n");

const N = Number(input[0].split(" ")[0]); // 5
const M = Number(input[0].split(" ")[1]); // 21

let inputArr = input[1].split(" ").map((str) => Number(str));

let sum = 0;

for (let i = 0; i < inputArr.length; i++) {
  let minusNum = Infinity;

  for (let j = i + 1; j < inputArr.length - 1; j++) {
    for (let k = j + 1; k < inputArr.length; k++) {
      if (input[i] + input[j] + input[k] > M) {
        continue;
      } else if (minusNum > M - sum) {
        sum = input[i] + input[j] + input[k];
        minusNum = M - sum;
      }
    }
  }
}

console.log(sum);
