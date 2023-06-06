const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = [];
let gathers = ["a", "e", "i", "o", "u"];
let flag = false;

for (let i = 0; i < input.length - 1; i++) {
  let str = input[i];
  let gatherCount = 0;
  let consonantCount = 0;
  let flag = true;
  let gatherFlag = false;

  for (let k = 0; k < gathers.length; k++) {
    if (str.includes(gathers[k])) {
      gatherFlag = true;
    }
  }

  if (gatherFlag === false) {
    answer.push(`<${str}> is not acceptable.`);
    continue;
  }

  for (let j = 0; j < str.length; j++) {
    if (str[j] === str[j + 1] && str[j] !== "e" && str[j] !== "o") {
      flag = false;
      break;
    }

    if (
      str[j] === "a" ||
      str[j] === "e" ||
      str[j] === "i" ||
      str[j] === "o" ||
      str[j] === "u"
    ) {
      gatherCount++;
      consonantCount = 0;
      if (gatherCount === 3) {
        flag = false;
        break;
      }
    } else {
      consonantCount++;
      gatherCount = 0;
      if (consonantCount === 3) {
        flag = false;
        break;
      }
    }
  }

  if (flag === false) {
    answer.push(`<${str}> is not acceptable.`);
  } else {
    answer.push(`<${str}> is acceptable.`);
  }
}

console.log(answer.join("\n"));
