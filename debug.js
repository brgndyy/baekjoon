const input = `3`;

let N = Number(input);

let nums = [1, 5, 10, 50];

let count = 1;

let numArr = [1, 5, 10, 50];

while (count < N) {
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
      temp.push(numArr[j] + nums[i]);
    }
  }

  numArr = [...new Set(temp)];

  count++;
}

console.log(numArr);
