const input = `9
1 1 230
2 2 210
1 3 205
2 1 100
2 2 150
3 1 175
3 2 190
3 3 180
3 4 195`.split("\n");

let N = Number(input.shift());

let arr = input
  .map((str) => str.split(" ").map((str) => Number(str)))
  .sort((a, b) => b[2] - a[2]);
let count = 0;
let medal = [];
let countryCnt = {};

for (let i = 0; i < N; i++) {
  if (countryCnt[arr[i][0]] === undefined) {
    countryCnt[arr[i][0]] = 1;
    medal.push([arr[i][0], arr[i][1]]);
  } else if (countryCnt[arr[i][0]] < 2) {
    countryCnt[arr[i][0]] += 1;
    medal.push([arr[i][0], arr[i][1]]);
  }

  if (medal.length === 3) {
    break;
  }
}

let answer = medal.map((str) => str.join(" ")).join("\n");

console.log(answer);
