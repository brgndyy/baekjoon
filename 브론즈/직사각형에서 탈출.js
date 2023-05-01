const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

let hMinY = h - y; // 1
let yMinZero = y - 0; // 2

let wMinX = w - x;
let xMinZero = x - 0;

console.log(Math.min(hMinY, yMinZero, wMinX, xMinZero));
