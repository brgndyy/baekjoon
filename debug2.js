const input = `5 7
4 5 1 3 2`.split("\n");

const A = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);

let count = 0;
let answer;

let arr = input[1].split(" ").map((str) => Number(str));

function merge(leftArr, rightArr) {
  let result = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  while (leftArr.length) {
    result.push(leftArr.shift());
  }

  while (rightArr.length) {
    result.push(rightArr.shift());
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.ceil(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));

  return merge(leftArr, rightArr);
}

console.log(mergeSort(arr));
