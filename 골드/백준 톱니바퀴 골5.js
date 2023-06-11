const input = `10101111
01111101
11001110
00000010
2
3 -1
1 1`.split("\n");

let topniArr = [];

for (let i = 0; i < 4; i++) {
  let topni = input
    .shift()
    .split("")
    .map((str) => Number(str));

  topniArr.push(topni);
}

console.log(topniArr);
