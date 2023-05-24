const input = `5
55 185
58 183
88 186
60 175
46 155`.split("\n");

let N = Number(input.shift());
let answer = [];

let wh = input.map((wh) => [
  Number(wh.split(" ")[0]),
  Number(wh.split(" ")[1]),
]);

for (let i = 0; i < wh.length; i++) {
  let count = N;

  for (let j = 0; j < wh.length; j++) {
    if (i !== j) {
      if (wh[i][0] > wh[j][0] || wh[i][1] > wh[j][1]) {
        count--;
      }
    }
  }

  answer.push(count);
}

console.log(answer);
