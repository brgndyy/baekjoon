const input = `3 3
ABC
DEF
2`.split("\n");

let [N1, N2] = input[0].split(" ").map(Number);
let right = input[1];
let left = input[2];
let T = Number(input[3]);

right = right.split("").reverse().join("");

let ant = right + left; // ALJCRUO
let time = 0;

while (time < T) {
  // right => ALJ
  // left => CRUO
  for (let i = 0; i < N1 + N2 - 1; i++) {
    // i 가 2일때 right와 left 조건 둘다 충족
    if (right.includes(ant[i]) && left.includes(ant[i + 1])) {
      ant = ant.substring(0, i) + ant[i + 1] + ant[i] + ant.substring(i + 2);
      i++;
    }
  }
  time += 1;
}

console.log(ant);
