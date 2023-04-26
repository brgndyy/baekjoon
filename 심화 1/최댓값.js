const input = `3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 80 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 90 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 90`.split("\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let maxNum = 0;
let maxIndex = "";

input.forEach((arr, index) => {
  let splitArr = arr.split(" ").map((str) => Number(str));

  for (let j = 0; j < splitArr.length; j++) {
    if (splitArr[j] > maxNum) {
      maxNum = splitArr[j];
      maxIndex = index + 1 + " " + (j + 1);
    }
  }
});

console.log(maxNum.toString());
console.log(maxIndex);
