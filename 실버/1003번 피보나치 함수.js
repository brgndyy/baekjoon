const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const len = input[0];

for (let i = 1; i <= len; i++) {
  let oneCount = 0; // 1이 출력되는 횟수
  let zeroCount = 1; // 0이 출력되는 횟수

  for (let j = 1; j <= input[i]; j++) {
    const tmpCount = zeroCount;

    zeroCount = oneCount;
    oneCount = tmpCount + oneCount;
  }

  console.log(zeroCount + " " + oneCount);
}

// F(0) = zeroCount : 0, oneCount  = 0
// F(1) = zeroCount : 1, oneCount = 1
// F(2) = F(0) + F(1) 이고 이는 각각 zeroCount : 1, oneCount = 1
// F(3) = F(1) + F(2) 이고 이는 각각 zeroCount : 2, oneCount  = 2
