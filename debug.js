const input = `15 5`.split(" ").map(Number);

let [ball, team] = input;

const basketArr = Array(team).fill(1);

let index = 0;

ball -= team;

while (ball > 0) {
  if (index >= basketArr.length) {
    index = 0;
  }

  if (ball - 1 > 0) {
    ball = ball - 1;
  } else {
    ball -= 1;
  }

  basketArr[index] += ball;

  index++;
}

console.log(basketArr);

// if (new Set([...basketArr]).size !== basketArr.length) {
//   console.log(-1);
// } else {
//   basketArr.sort((a, b) => b - a);

//   console.log(basketArr[0] - basketArr[basketArr.length - 1]);
// }
