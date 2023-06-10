const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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

//알파벳 구하기

let thousandNum = Math.floor(totalNum / 1000);
let thousandStr = "M".repeat(thousandNum);

totalNum -= 1000 * thousandNum;

let hundredNum = Math.floor(totalNum / 100);
let hundredStr = "";

totalNum -= 100 * hundredNum;

if (hundredNum === 4) {
  hundredStr = "CD";
} else if (hundredNum === 9) {
  hundredStr = "CM";
} else if (hundredNum >= 5) {
  let CNum = hundredNum % 5;
  hundredStr = "D" + "C".repeat(CNum);
} else {
  let CNum = hundredNum % 5;
  hundredStr = "C".repeat(CNum);
}

let tenNum = Math.floor(totalNum / 10);
let tenStr = "";

totalNum -= 10 * tenNum;

if (tenNum === 4) {
  tenStr = "XL";
} else if (tenNum === 9) {
  tenStr = "XC";
} else if (tenNum >= 5) {
  let XNum = tenNum - 5;
  tenStr = "L" + "X".repeat(XNum);
} else {
  tenStr = "X".repeat(tenNum);
}

let oneNum = totalNum;
let oneStr = "";

if (oneNum === 4) {
  oneStr = "IV";
} else if (oneNum === 9) {
  oneStr = "IX";
} else if (oneNum >= 5) {
  let INum = oneNum - 5;
  oneStr = "V" + "I".repeat(INum);
} else {
  oneStr = "I".repeat(oneNum);
}

let totalStr = thousandStr + hundredStr + tenStr + oneStr;

answer.push(totalStr);

console.log(answer.join("\n"));
