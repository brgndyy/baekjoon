const input = `5
5
10
7
3
8`.split("\n");

let N = Number(input.shift());
let arr = input.map((str) => Number(str));

if (arr.length === 1) {
  console.log(0);
} else {
  let dasom = arr[0];
  let others = arr.slice(1).sort((a, b) => b - a);
  let count = 0;

  while (dasom <= others[0]) {
    dasom++;
    others[0]--;
    count++;
    others.sort((a, b) => b - a);
  }

  console.log(count);
}
