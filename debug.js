const input = `5
1 01:10
1 02:20
2 45:30
2 46:40
2 47:50`.split("\n");

let N = Number(input.shift());

let [firstWinner, firstTime] = [
  Number(input[0].split(" ")[0]),
  input[0].split(" ")[1],
];

let [firstMin, firstSec] = firstTime.split(":").map((str) => Number(str));

let firstTotalTime = firstMin * 60 + firstSec;

let winnerTime = firstTotalTime;
let nowWinner = firstWinner;
let winCount = new Map();
winCount.set(1, 0);
winCount.set(2, 0);
winCount.set(nowWinner, 1);

let winningTime = new Map();
winningTime.set(1, 0);
winningTime.set(2, 0);

for (let i = 1; i < N; i++) {
  let [winTeam, winTime] = [
    Number(input[i].split(" ")[0]),
    input[i].split(" ")[1],
  ];

  let [min, sec] = winTime.split(":").map((str) => Number(str));

  let totalTime = min * 60 + sec;

  if (winCount.get(1) !== winCount.get(2)) {
    winningTime.set(
      nowWinner,
      winningTime.get(nowWinner) + (totalTime - winnerTime)
    );
  }

  winCount.set(winTeam, winCount.get(winTeam) + 1);

  if (winCount.get(1) > winCount.get(2)) {
    nowWinner = 1;
  } else if (winCount.get(1) < winCount.get(2)) {
    nowWinner = 2;
  } else {
    nowWinner = null;
  }

  winnerTime = totalTime;
}

if (nowWinner !== null) {
  winningTime.set(
    nowWinner,
    winningTime.get(nowWinner) + (48 * 60 - winnerTime)
  );
}

console.log(
  ((winningTime.get(1) / 60) | 0).toString().padStart(2, "0"),
  (winningTime.get(1) % 60).toString().padStart(2, "0")
);
console.log(
  ((winningTime.get(2) / 60) | 0).toString().padStart(2, "0"),
  (winningTime.get(2) % 60).toString().padStart(2, "0")
);
