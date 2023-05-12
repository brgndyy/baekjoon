const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let queue = Array.from({ length: N }, (_, index) => index + 1);

while (queue.length !== 1) {
  queue.shift();
  let card = queue.shift();
  queue.push(card);
}

console.log(queue[0]);
