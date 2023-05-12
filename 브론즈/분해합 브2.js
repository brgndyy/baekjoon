const input = `3`;

let N = Number(input);

let num = N - 1;
let numArr = [];

while (num > 0) {
  let splitNum = num
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);

  if (num + splitNum === N) {
    numArr.push(num);
  } else {
    num--;
  }
}

console.log(numArr);
