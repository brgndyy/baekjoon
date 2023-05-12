const input = `5 7
4 5 1 3 2`.split("\n");

const A = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);

let arr = input[1].split(" ").map((str) => Number(str));
let count = 0;
let target;

const merge = (arr1, arr2) => {
  let result = [];
  let [i, j] = [0, 0];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    count++;
    if (count === K) target = result[result.length - 1];
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    count++;
    if (count === K) target = result[result.length - 1];
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    count++;
    if (count === K) target = result[result.length - 1];
  }
  return result;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid));
  return merge(leftArr, rightArr);
};

mergeSort(arr);
if (!target) target = -1;
console.log(target);
