const input = `1 3 -1 4 1 7`;

let inputArr = input.split(" ").map((str) => Number(str));

let a = inputArr[0];
let b = inputArr[1];
let c = inputArr[2];
let d = inputArr[3];
let e = inputArr[4];
let f = inputArr[5];

for (let i = -999; i <= 999; i++) {
  for (let j = -999; j <= 999; j++) {
    if (a * i + b * j === c && d * i + e * j === f) {
      console.log(i + " " + j);
    } else {
      continue;
    }
  }
}
