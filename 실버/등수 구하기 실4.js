const input = `10 1 10
10 9 8 7 6 5 4 3 2 1`.split("\n");

if (input.length === 1) {
  console.log(1);
} else {
  let [N, newScore, P] = input
    .shift()
    .split(" ")
    .map((str) => Number(str));
  let scoreArr = input[0].split(" ").map((str) => Number(str));
  scoreArr.push(newScore);

  scoreArr = scoreArr.sort((a, b) => b - a);

  let scoreMap = new Map();

  for (let i = 0; i < scoreArr.length; i++) {
    let rank = N + 1;
    let ranker = scoreArr[i];
    for (let j = 0; j < scoreArr.length; j++) {
      if (i === j) {
        continue;
      } else if (ranker >= scoreArr[j]) {
        rank--;
      }
    }

    scoreMap.set(ranker, rank);
  }

  console.log(scoreMap);
}
