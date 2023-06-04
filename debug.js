const input = `2
5 30 25 76 23 78
6 25 50 70 99 70 90`.split("\n");

let answer = [];
let K = Number(input.shift());
let count = 1;

let sortedNums = input
  .map((arr) => arr.split(" ").map((str) => Number(str)))
  .map((arr) => arr.sort((a, b) => b - a));

for (let i = 1; i <= sortedNums.length; i++) {
  let classNum = i;
  answer.push(classNum);
  let maxNum = sortedNums[i - 1][0];
  let minNum = sortedNums[i - 1][sortedNums[i - 1].length - 1];
  let gap = 0;

  for (let j = 0; j < sortedNums[i].length; j++) {
    let minus = sortedNums[i][j] - sortedNums[i][j + 1];

    if (minus > gap) {
      gap = minus;
    }
  }

  let str = `Max ${maxNum}, Min ${minNum}, Largest gap ${gap}`;

  answer.push(str);
}

console.log(answer);
