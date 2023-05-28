const input = `<int>2147483647<long long><max>9223372036854775807`;
let flag = false;
let answer = [];

for (let i = 0; i < input.length; i++) {
  let reverseStrArr = [];

  if (input[i] === "<") {
    if (reverseStrArr.length > 0) {
      answer.push(reverseStrArr.join(""));
      reverseStrArr = [];
    }
    flag = true;
    answer.push("<");
  } else if (input[i] === ">") {
    flag = false;
    answer.push(">");
  } else {
    if (flag) {
      answer.push(input[i]);
    } else {
      reverseStrArr.unshift(input[i]);
    }
  }
}

console.log(answer);
