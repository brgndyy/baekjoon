const input = `15 5`.split(" ").map(Number);

let [ball, team] = input;

let sum = 0;

for (let i = 1; i <= team; i++) {
  sum += i;
}

if (sum > ball) {
  console.log(-1);
} else {
  ball -= sum;

  if (ball % team === 0) {
    console.log(team - 1);
  } else {
    console.log(team);
  }
}
