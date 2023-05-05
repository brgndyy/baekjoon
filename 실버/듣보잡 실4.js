const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);

let CSPeople = input.slice(1, N + 1);
let CSPeopleMap = new Map();
let CLPeople = input.slice(N + 1);
let CLPeopleMap = new Map();
let answer = [];

CSPeople.forEach((person) => CSPeopleMap.set(person, 1));
CLPeople.forEach((person) => CLPeopleMap.set(person, 1));

CSPeopleMap.forEach((value, key) => CLPeopleMap.get(key) && answer.push(key));

console.log(answer.length);
console.log(answer.sort().join(" "));
