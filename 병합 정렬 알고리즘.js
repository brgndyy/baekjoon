const arr = [5, 3, 4, 7, 1];

function mergeSort(arr) {
  // 배열 자체의 길이가 2보다 작다면 그냥 그 배열 자체를 반환
  if (arr.length < 2) {
    return arr;
  }

  // 배열의 중앙 인덱스 값 올림해서 구해주기

  const mid = Math.ceil(arr.length / 2);

  // 왼쪽 값
  const leftArr = mergeSort(arr.slice(0, mid));

  // 오른쪽 값
  const rightArr = mergeSort(arr.slice(mid));

  return merge(leftArr, rightArr);
}

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

console.log(mergeSort(arr));
