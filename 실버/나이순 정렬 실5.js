const input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`.split("\n");

const N = input.shift();

let sortedInput = input.sort(
  (a, b) => Number(a.split(" ")[0]) - Number(b.split(" ")[0])
);

console.log(sortedInput.join("\n"));
