const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const input = `2
// 5
// 3 2
// 1 4
// 4 1
// 2 3
// 5 5
// 7
// 3 6
// 7 3
// 4 2
// 1 4
// 5 7
// 2 5
// 6 1`.split("\n");

const T = Number(input[0]);

let answer = [];

let line = 1;

for (let i = 0; i < T; i++) {
  const N = Number(input[line]); // 5

  const gradeArr = [];

  for (let j = line + 1; j <= line + N; j++) {
    const grade = input[j].split(" ").map(Number);

    gradeArr.push(grade);
  }

  const sortedGradeArr = gradeArr.sort((a, b) => a[0] - b[0]);

  let count = 0;

  const firstGrade = sortedGradeArr[0];

  for (let [document, interview] of sortedGradeArr) {
    if (firstGrade[0] < document && firstGrade[1] < interview) {
      count++;
    } else {
      firstGrade[0] = document;
      firstGrade[1] = interview;
    }
  }

  answer.push(N - count);
  line += N + 1;
}

console.log(answer.join("\n"));
