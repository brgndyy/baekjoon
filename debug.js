const input = `<   space   >space space<    spa   c e>`;

let strArr = [];
let flag = false;
let answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "<") {
    if (strArr.length > 0) {
      answer = answer.concat(strArr);
      strArr = [];
    }
    flag = true;
    answer.push("<");
  } else if (input[i] === ">") {
    answer.push(">");
    flag = false;
  } else {
    if (flag) {
      answer.push(input[i]);
    } else {
      if (input[i] === " ") {
        strArr.push(" ");
        answer = answer.concat(strArr);
        strArr = [];
      } else {
        strArr.unshift(input[i]);
      }
    }
  }
}

console.log(answer.join(""));
