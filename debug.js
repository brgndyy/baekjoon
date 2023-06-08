const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cards = input.split(" ").map((str) => str);

let numSet = new Set();

let sigyeNum = findSigyeNum(cards);

numSet.add(sigyeNum);

let countNum = sigyeNum - 1; // 1121

while (countNum.toString().length === 4) {
  let splitCountNum = countNum.toString().split("");
  let num;

  if (splitCountNum.includes("0")) {
    countNum = Number(splitCountNum.join(""));
    countNum--;
  } else {
    num = findSigyeNum(splitCountNum);

    if (num < sigyeNum) {
      numSet.add(num);
    }
    countNum = Number(splitCountNum.join(""));
    countNum--;
  }
}

function findSigyeNum(splitCountNum) {
  let numArr = [];

  for (let i = 0; i < 4; i++) {
    let str1;
    let str2;
    let str3;
    let str4;

    if (i >= 1) {
      str1 = splitCountNum[i];
      str2 = splitCountNum[(i + 1) % 4];
      str3 = splitCountNum[(i + 2) % 4];
      str4 = splitCountNum[(i + 3) % 4];
    } else {
      str1 = splitCountNum[i];
      str2 = splitCountNum[i + 1];
      str3 = splitCountNum[i + 2];
      str4 = splitCountNum[i + 3];
    }

    let str = str1 + str2 + str3 + str4;

    numArr.push(Number(str));
  }

  return Math.min(...numArr);
}

let totalArr = [...numSet];

console.log(totalArr.indexOf(sigyeNum) + 1);
