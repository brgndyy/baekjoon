const input = `4
2
4
7
10`.split("\n");

let N = input.shift();

const sortInput = input.map((str) => Number(str)).sort((a, b) => a - b);

let minusArr = [];

for (let i = 0; i < sortInput.length - 1; i++) {
  minusArr.push(sortInput[i + 1] - sortInput[i]);
}

let minMinus = Math.min(...minusArr);

console.log(minusArr);

// 두 수의 차가 홀수와 짝수가 섞여있을때, 무조건 간격은 1로 되어야함
