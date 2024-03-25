const input = `2
6
22`
  .split("\n")
  .map(Number);

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let zeroCount = 1;
  let oneCount = 0;

  for (let j = 1; j <= input[i]; j++) {
    let tmp = zeroCount;
    zeroCount = oneCount;

    oneCount = zeroCount + tmp;
  }

  console.log(zeroCount + " " + oneCount);
}
