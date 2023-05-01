const input = `2735 1`;

let [N, K] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];
let measureArr = [];

for (let i = 1; i <= Math.floor(N / 2); i++) {
  if (N % i === 0) {
    measureArr.push(i);
  }
}

measureArr.push(N);

console.log(measureArr);
