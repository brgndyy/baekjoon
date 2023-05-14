const input = `72`;

let N = Number(input);
let answer = [];

let numArr = Array(N + 1)
  .fill(true)
  .fill(false, 0, 2);

for (let i = 2; i <= numArr.length; i++) {
  for (let j = i * i; j <= numArr.length; j += i) {
    numArr[j] = false;
  }
}
let sosuArr = [];

numArr.forEach((num, index) => num === true && sosuArr.push(index));

for (let k = 0; k < sosuArr.length; k++) {
  if (N % sosuArr[k] === 0) {
    answer.push(sosuArr[k]);
    k -= 1;
  }
}

console.log(sosuArr);
