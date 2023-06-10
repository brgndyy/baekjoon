const input = `3 3
ABC
DEF
2`.split("\n");

let [N1, N2] = input[0].split(" ").map(Number);
let right = input[1];
let left = input[2];
let T = Number(input[3]);

right = right.split("").reverse().join("");

let ant = right + left;
let time = 0;

while (time < T) {
  for (let i = 0; i < N1 + N2 - 1; i++) {
    if (right.includes(ant[i]) && left.includes(ant[i + 1])) {
      // Swap ant[i] and ant[i+1]
      let temp = ant[i];
      ant = ant.substring(0, i) + ant[i + 1] + ant[i] + ant.substring(i + 2);
      i++;
    }
  }
  time += 1;
}

console.log(ant);
