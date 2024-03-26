const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let zeroCount = 1;
  let oneCount = 0;

  for (let j = 1; j <= input[i]; j++) {
    const tmpCount = zeroCount;

    zeroCount = oneCount;
    oneCount += tmpCount;
  }

  console.log(zeroCount + " " + oneCount);
}
