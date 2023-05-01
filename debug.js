const input = `30 20
10 10
10 20`.split("\n");

let x = [];
let y = [];

for (let i = 0; i < input.length; i++) {
  x.push(Number(input[i].split(" ")[0]));
  y.push(Number(input[i].split(" ")[1]));
}

console.log(x);
