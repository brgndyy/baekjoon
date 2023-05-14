const input = `27`;

let N = Number(input);
let answer = [];

for (let i = 0; i < 27; i++) {
  for (let j = 0; j < 27; j++) {
    star(i, j, N);
  }

  answer.push("\n");
}

function star(i, j, N) {
  if (i % 3 === 1 && j % 3 === 1) {
    answer.push(" ");
  } else if (N === 1) {
    answer.push("*");
  } else {
    star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(N / 3));
  }
}

console.log(answer.join(""));
