const input = `3
1 45000
6 10
13 17`.split("\n");

let T = Number(input[0]);
let answer = [];

for (let i = 1; i <= T; i++) {
  let count = 1;
  let [num1, num2] = [
    Number(input[i].split(" ")[0]),
    Number(input[i].split(" ")[1]),
  ];

  let maxNum = Math.max(num1, num2);
  let minNum = Math.max(num1, num2);

  while (maxNum % minNum === 0) {
    count++;
    maxNum *= minNum;
    answer.push(maxNum);
  }
}

console.log(answer);
