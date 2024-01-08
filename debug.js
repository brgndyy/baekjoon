const input = `5
5 4 2 3 1`.split("\n");

const N = Number(input.shift());

const studentArr = input[0].split(" ").map((str) => Number(str));

const 간식받는곳 = [0];

const 왼쪽대기열 = [];

while (studentArr.length) {
  const studentNumber = studentArr.shift();

  if (간식받는곳[간식받는곳.length - 1] + 1 === studentNumber) {
    간식받는곳.push(studentNumber);
  } else {
    왼쪽대기열.push(studentNumber);
  }
}

for (let i = 왼쪽대기열.length - 1; i >= 0; i--) {
  const studentNumber = 왼쪽대기열[i];

  if (간식받는곳[간식받는곳.length - 1] + 1 === studentNumber) {
    간식받는곳.push(studentNumber);
  }
}

console.log(간식받는곳.length - 1 === N ? "Nice" : "Sad");
