const input = `5`;

const N = Number(input);

const lineNum = 2 * N - 1; // 9
let answer = "";
let maxStarLine = "";
let startIndex = Math.floor(lineNum / 2); //4

for (let i = 0; i < lineNum; i++) {
  maxStarLine += "*";
}

console.log(maxStarLine);
