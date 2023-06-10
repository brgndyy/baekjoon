const input = `DLIII
MCMXL`.split("\n");

let answer = [];
let strArr = input.map((str) => str.split(""));
let totalNum = 0;

let pros = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

for (let i = 0; i < 2; i++) {
  let sum = 0;

  for (let j = 0; j < strArr[i].length; j++) {
    if (strArr[i][j] === "I" && strArr[i][j + 1] === "V") {
      sum += 4;
      j++;
    } else if (strArr[i][j] === "I" && strArr[i][j + 1] === "X") {
      sum += 9;
      j++;
    } else if (strArr[i][j] === "X" && strArr[i][j + 1] === "L") {
      sum += 40;
      j++;
    } else if (strArr[i][j] === "X" && strArr[i][j + 1] === "C") {
      sum += 90;
      j++;
    } else if (strArr[i][j] === "C" && strArr[i][j + 1] === "D") {
      sum += 400;
      j++;
    } else if (strArr[i][j] === "C" && strArr[i][j + 1] === "M") {
      sum += 900;
      j++;
    } else {
      sum += pros[strArr[i][j]];
    }
  }

  totalNum += sum;
}

answer.push(totalNum);

console.log(totalNum);
