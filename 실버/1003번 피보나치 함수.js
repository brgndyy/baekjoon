const input = `2
6
22`
  .split("\n")
  .map(Number);

let T = input[0];

for (let i = 1; i <= T; i++) {
  let zeroCount = 1;
  let oneCount = 0;

  for (let j = 1; j <= input[i]; j++) {
    let tmpCount = zeroCount;

    zeroCount = oneCount;

    oneCount += tmpCount;
  }

  console.log(zeroCount + " " + oneCount);
}

// F(0) = zeroCount : 1, oneCount  = 0
// F(1) = zeroCount : 0, oneCount = 1
// F(2) = F(0) + F(1) 이고  zeroCount : 1, oneCount = 1
// F(3) = F(1) + F(2) 이고  zeroCount : 1, oneCount  = 2
// F(4) = F(2) + F(3) 이고  zeroCount : 2, oneCount = 3
