const input = `7
15 11 4 8 5 2 4`.split("\n");

const N = Number(input.shift());

const numArr = input[0].split(" ").map(Number);

numArr.reverse();

let arr = [0];

for (let x of numArr) {
  if (x > arr[arr.length - 1]) {
    arr.push(x);
  } else {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
      const midIndex = Math.floor((startIndex + endIndex) / 2);

      if (arr[midIndex] >= x) {
        endIndex = midIndex;
      } else {
        startIndex = midIndex + 1;
      }
    }

    arr[endIndex] = x;
  }
}

console.log(arr);
