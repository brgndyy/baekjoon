const input = `<   space   >space space space<    spa   c e>`;

let temp = [];
let flag = false;
let answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "<") {
    if (temp.length > 0) {
      answer = answer.concat(temp);
      temp = [];
    }
    answer.push("<");
    flag = true;
  } else if (input[i] === ">") {
    answer.push(">");

    flag = false;
  } else {
    if (flag) {
      answer.push(input[i]);
    } else {
      if (input[i] === " ") {
        temp.push(" ");
        answer = answer.concat(temp);
        temp = [];
      } else {
        temp.unshift(input[i]);
      }
    }
  }
}

if (!flag) {
  answer = answer.concat(temp);
}

console.log(answer.join(""));
