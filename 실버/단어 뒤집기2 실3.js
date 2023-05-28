const input = `<ab cd>ef gh<ij kl>`;
let str = input.split("");
let flag = false;
let answer = [];

for (let i = 0; i < str.length; i++) {
  let reverseStrArr = [];

  if (str[i] === "<") {
    if (reverseStrArr.length > 0) {
      answer.push(reverseStrArr.join(""));
      reverseStrArr = [];
    }
    flag = true;
    answer.push("<");
  } else if (str[i] === ">") {
    flag = false;
    answer.push(">");
  } else {
    if (flag) {
      answer.push(str[i]);
    } else {
      reverseStrArr.unshift(str[i]);
    }
  }
}

console.log(answer);
