const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let K = Number(input.shift());
let directions = input.map((arr) => [
  Number(arr.split(" ")[0]),
  Number(arr.split(" ")[1]),
]);
let eOrW = [];
let sOrN = [];
directions.map((arr) => {
  if (arr[0] === 1 || arr[0] === 2) {
    eOrW.push(arr);
  } else if (arr[0] === 3 || arr[0] === 4) {
    sOrN.push(arr);
  }
});

let eOrWMax = Math.max(...eOrW.map((arr) => arr[1]));
let sOrNMax = Math.max(...sOrN.map((arr) => arr[1]));
let eOrWMin = Math.min(...eOrW.map((arr) => arr[1]));
let sOrNMin = Math.min(...sOrN.map((arr) => arr[1]));

let totalArea = eOrWMax * sOrNMax;
let minusArea = eOrWMin * sOrNMin;

let resultArea = totalArea - minusArea;

console.log(resultArea * K);
