const input = `3
7`.split("\n");

const [N, K] = input.map(Number);

const arr = Array.from({ length: N }, (_, index) =>
  Array.from({ length: N }, (_, indextwo) => (index + 1) * (indextwo + 1))
);

let totalArr = [];

arr.forEach((arr) => {
  totalArr.push(...arr);
});

totalArr.sort((a, b) => a - b);

console.log(totalArr[K - 1]);
