const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`.split("\n");

const N = Number(input[0]);

const timeArr = [];

for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  timeArr.push([start, end]);
}

timeArr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let count = 0;
let endTime = 0;

for (let i = 0; i < N; i++) {
  if (timeArr[i][0] >= endTime) {
    endTime = timeArr[i][1];
    count++;
  }
}

console.log(timeArr);
