const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

const numArr = input[0].split(" ").map(Number);

numArr.reverse();

let arr = [0];

for (let x of numArr) {
  if (x > arr[arr.length - 1]) {
    arr.push(x);
  } else {
    const endIndex = findFirstGreaterOrEqualIndex(arr, x, 0, arr.length - 1);

    arr[endIndex] = x;
  }
}

function findFirstGreaterOrEqualIndex(arr, target, startIndex, endIndex) {
  while (startIndex < endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[midIndex] >= target) {
      endIndex = midIndex;
    } else {
      startIndex = midIndex + 1;
    }
  }

  return endIndex;
}

console.log(numArr.length - arr.length + 1);
