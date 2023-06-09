const input = `3
1212345
1212356
0033445`.split("\n");

let N = Number(input.shift());
let studentsArr = [...input];

let count = studentsArr[0].length;
let flag = true;

while (flag) {
  let studentMap = new Map();
  count--;

  for (let i = 0; i < N; i++) {
    studentsArr[i] = studentsArr[i].split("");
    studentsArr[i].splice(0, 1);
    studentsArr[i] = studentsArr[i].join("");

    studentMap.set(studentsArr[i], studentMap.get(studentsArr[i]) + 1 || 1);
  }

  studentMap.forEach((value, key) => {
    if (value === 2) {
      flag = false;
      count++;
    }
  });
}

console.log(count);
