const input = `(()[[]])([])`;

let stack = [];

let numArr = [];

let countOne = [];
let countTwo = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push("(");
  } else if (input[i] === ")") {
    stack.push(")");

    if (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") {
      stack.pop();
      stack.pop();

      countOne.push(2);
    }
  } else if (input[i] === "[") {
    stack.push("[");
  } else if (input[i] === "]") {
    stack.push("]");

    if (stack[stack.length - 2] === "[" && stack[stack.length - 1] == "]") {
      stack.pop();
      stack.pop();

      countTwo.push(3);
    }
  }
}
