const input = `9 23
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBW`.split("\n");

// const N = Number(input[0].split(" ")[0]);
// const M = Number(input[0].split(" ")[1]);
const nAndM = input.shift();

const N = Number(nAndM.split(" ")[0]);
const M = Number(nAndM.split(" ")[1]);
let board = input.map((str) => str.split(""));

const answer = [];
const line = ["WBWBWBWB", "BWBWBWBW"];

// i = x 축 -8
// j = y 축 -8
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    //2가지의 경우를 위해 z for문을 이용하였습니다 white로 시작할 경우 black으로 시작할 경우
    for (let z = 0; z < 2; z++) {
      let count = 0;
      // 8*8 정사각형의 틀을 도는 for 문 입니다.
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const current = board[i + x][j + y]; //current는 모든 각 글자를 비교하여 모든 경우의 8*8을 유추합니다
          //console.log(current);
          //console.log(line[(x + z) % 2][y]);
          if (current !== line[(x + z) % 2][y]) {
            //line의 올바른 줄과 비교하여 틀린 것이 있다면 count를 셉니다
            count++;
          }
        }
      }
      answer.push(count); //count의 개수를 배열에 넣습니다
    }
  }
}

console.log(Math.min(...answer));
