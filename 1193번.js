const input = `14`;

let N = Number(input);
let lineNum = 0;
let count = 1;

while (N > 0) {
  lineNum += count;
  N -= lineNum;
  count++;
}

console.log(lineNum);

//홀수일때 짝수일때를 나눠서
