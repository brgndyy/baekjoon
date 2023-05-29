let input = `7
SLLSLLS`.split("\n");

let N = Number(input[0]); // 사람의 수
let str = input[1]; // 좌석 정보

let totalCups = N + 1;
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "L") {
    count++;

    if (count % 2 === 0) {
      totalCups--;
    }
  }
}

if (count === 0) {
  console.log(N);
} else {
  console.log(totalCups);
}
