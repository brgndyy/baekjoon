const input = `4
1 01:50
2 45:30
2 46:40
2 47:50`.split("\n");

let N = Number(input.shift());

let winner = new Map();
let answer = [];

for (let i = 0; i < N; i++) {
  let [winnerTeam, time] = [input[i].split(" ")[0], input[i].split(" ")[1]];

  if (winner.get(winnerTeam) === undefined && winner.size === 0) {
    winner.set(winnerTeam, 1);
  }
}

console.log(winner);
