const input = `3
1212345
1212356
0033445`.split("\n");

let N = Number(input.shift());
let studentsArr = [...input];

let count = 0;

while (true) {
  let studentSet = new Set();
  count++;

  for (let i = 0; i < N; i++) {
    let str = studentsArr[i].substring(studentsArr[i].length - count);

    studentSet.add(str);
  }

  if (studentSet.size === N) {
    break;
  }
}

console.log(count);
