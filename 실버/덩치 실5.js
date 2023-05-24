const input = `5
55 185
58 183
88 186
60 175
46 155`.split("\n");

let N = Number(input.shift());

let wh = input.map((wh) => [
  Number(wh.split(" ")[0]),
  Number(wh.split(" ")[1]),
]);

console.log(wh);
