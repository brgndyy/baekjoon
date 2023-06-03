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

  if (N === P && newScore <= scoreArr[N - 1]) {
    console.log(-1);
    return;
  }

  scoreArr.push(newScore);
  scoreArr = scoreArr.sort((a, b) => b - a);

  let rank = scoreArr.indexOf(newScore) + 1;
  console.log(rank);
}
