const input = `5 7
4 5 1 3 2`.split("\n");

const A = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);

let numArr = input[1].split(" ").map((str) => Number(str));
let count = 0;
let target;

function merge(leftArr, rightArr) {
  let result = [];
  let [i, j] = [0, 0];

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }

    count++;

    if (count === K) {
      target = result[result.length - 1];
    }
  }

  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
    count++;
    if (count === K) {
      target = result[result.length - 1];
    }
  }
  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
    count++;
    if (count === K) {
      target = result[result.length - 1];
    }
  }

  return result;
}

function mergeSort(numArr) {
  if (numArr.length < 2) {
    return numArr;
  }

  let mid = Math.ceil(numArr.length / 2); // 3
  let leftArr = mergeSort(numArr.slice(0, mid));
  let rightArr = mergeSort(numArr.slice(mid));

  return merge(leftArr, rightArr);
}

mergeSort(numArr);
if (!target) {
  target = -1;
}

console.log(target);
