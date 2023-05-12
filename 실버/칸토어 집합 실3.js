const input = `4`;

let N = Number(input);

if (N === 0) {
  console.log("-");
}

if (N === 1) {
  console.log("- -");
}

if (N === 2) {
  console.log("- -   - -");
}

let realNum = 1;

for (let i = 1; i <= N; i++) {
  realNum *= 3;
}

let line = "-".repeat(realNum);
let cutStartNum = realNum / 3 - 1;
let cutEndNum = realNum / 3 - 1;

line.splice();

while (line.includes("--")) {}
