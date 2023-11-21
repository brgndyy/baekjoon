let arr = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];

function lowerBound(arr, target, startIndex, endIndex) {
  while (startIndex < endIndex) {
    let midIndex = Math.floor((endIndex + startIndex) / 2);

    // 만약 중간 값이 타겟 값보다 크다면
    if (arr[midIndex] >= target) {
      // 최대한 왼쪽으로 이동
      endIndex = midIndex;
    } else {
      // 시작 인덱스를 중간으로 땡겨오기
      startIndex = midIndex + 1;
    }
  }

  return endIndex;
}

function upperBound(arr, target, startIndex, endIndex) {
  while (startIndex < endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[midIndex] > target) {
      endIndex = midIndex;
    } else {
      startIndex = midIndex + 1;
    }
  }

  return endIndex;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);

  return rightIndex - leftIndex;
}
