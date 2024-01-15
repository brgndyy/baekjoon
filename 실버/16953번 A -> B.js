const input = `100 40021`.split(" ").map(Number);

let [A, B] = input;

let answer = 0;

while (true) {
  if (A > B) {
    console.log(-1);
    return;
  }

  const splitedB = B.toString().split("");

  if (splitedB[splitedB.length - 1] === "1") {
    splitedB.pop();

    B = Number(splitedB.join(""));

    answer++;
  } else {
    B = Number(B) / 2;

    answer++;
  }

  if (A === B) {
    console.log(answer + 1);
    return;
  }
}
