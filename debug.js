const input = `7
15 11 4 8 5 2 4`.split("\n");

const N = Number(input.shift());

const nums = input[0].split(" ").map(Number).reverse();

let arr = [0];

for (let x of nums) {
  if (arr[arr.length - 1] < x) {
    arr.push(x);
  } else {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] >= x) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    arr[right] = x;
  }
}

console.log(arr);
