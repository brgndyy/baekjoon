const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input.shift());
let answer = [];

for (let i = 0; i < T; i++) {
  let splitStr = input[i].split(" ");
  let strArr = [];

  for (let j = 0; j < splitStr.length; j++) {
    let reverseStr = splitStr[j].split("").reverse().join("");

    strArr.push(reverseStr);
  }

  answer.push(strArr.join(" "));
}
console.log(answer.join("\n"));
