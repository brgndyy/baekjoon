const input = `7
ENTER
pjshwa
pjshwa
chogahui05
ENTER
pjshwa
chansol`.split("\n");

let N = Number(input.shift());

let stack = [];
let count = 0;

for (let i = 0; i < N; i++) {
  if (input[i] === "ENTER") {
    stack.push(input[i + 1]);
    count++;
    i++;
  } else if (stack[i - 1] === input[i]) {
    continue;
  } else {
    count++;
  }
}

console.log(count);
