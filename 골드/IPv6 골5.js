const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let str = input.split(":");

let count = 8;
let answer = [];
let realAnswer = [];

// 공통적으로 answer 배열에 문자열들 담아주기
for (let i = 0; i < str.length; i++) {
  if (str[i] == "") {
    answer.push("");
  } else {
    let strr = str[i].padStart(4, 0);
    count--;

    answer.push(strr);
  }
}

// ::1 나 1:: 이 인풋값일때
if (
  (answer[0] === "" && answer[1] === "") ||
  (answer[answer.length - 1] === "" && answer[answer.length - 2] === "")
) {
  let reduceCount = 0;

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "") {
      reduceCount++;
    } else {
      realAnswer.push(answer[i]);
      reduceCount = 0;
    }

    if (reduceCount === 2) {
      while (count !== 0) {
        realAnswer.push("0000");
        count--;
      }
    }
  }

  console.log(realAnswer.join(":"));
}
// 25:09:1985:aa::bb 식의 중간에 여러개가 사라지는 인풋값이 들어갔을때
else {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "") {
      while (count !== 0) {
        realAnswer.push("0000");
        count--;
      }
    } else {
      realAnswer.push(answer[i]);
    }
  }

  console.log(realAnswer.join(":"));
}
