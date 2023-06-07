const input = `5
ZG508OK
PU305A
RI604B
ZG206A
ZG232ZF
PU305A
ZG232ZF
ZG206A
ZG508OK
RI604B`.split("\n");

// let N = Number(input.shift());

// let dgArr = [];
// let dgMap = new Map();
// let ysArr = [];
// let ysMap = new Map();
// let count = 0;

// for (let i = 0; i < input.length; i++) {
//   if (i < N) {
//     dgMap.set(input[i], i + 1);
//   } else {
//     ysMap.set(input[i], i - N + 1);
//   }
// }

// dgMap.forEach((value, key) => {
//   if (value > ysMap.get(key)) {
//     count++;
//   }
// });

// console.log(count);

let N = Number(input[0]);
let entry = new Map();
let exit = new Map();
let overtake = 0;

for (let i = 0; i < N; i++) {
  entry.set(input[i + 1], i);
}

for (let i = 0; i < N; i++) {
  exit.set(input[i + N + 1], i);
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (exit.get(input[i + 1]) > exit.get(input[j + 1])) {
      overtake++;
      break;
    }
  }
}

console.log(overtake);
