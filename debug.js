const input = `4 4 2
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16`.split("\n");

let [N, M, R] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let arr = input.map((arr) => arr.split(" ").map((str) => Number(str)));

function main() {
  let answer = "";

  let ret = [...arr];
  for (let i = 0; i < R; i++) {
    ret = rotate(arr);
    arr = [...ret];
  }
  ret.forEach((e) => {
    answer += e.join(" ") + "\n";
  });

  return console.log(answer.trim());
}
function rotate(arr) {
  let min = Math.min(N, M);

  // 나눗셈으로 밀기.
  // 각 모서리 시작점은 다른애가 채워줌.
  let temp = new Array(N).fill(null).map((_) => new Array(M).fill(0));
  for (let limit = 0; limit < Math.floor(min / 2); limit++) {
    // 윗줄.
    for (let j = M - 2 - limit; j >= 0 + limit; j--) {
      temp[0 + limit][j] = arr[0 + limit][j + 1];
    }
    // 왼쪽.
    for (let j = 1 + limit; j < N - limit; j++) {
      temp[j][0 + limit] = arr[j - 1][0 + limit];
    }
    // 아래
    for (let j = 1 + limit; j < M - limit; j++) {
      temp[N - 1 - limit][j] = arr[N - 1 - limit][j - 1];
    }
    // 오른쪽.
    for (let j = N - 2 - limit; j >= 0 + limit; j--) {
      temp[j][M - 1 - limit] = arr[j + 1][M - 1 - limit];
    }
  }
  // temp.forEach(e => {
  //   console.log(e.join(' '))
  // })

  return temp;
}
main();
