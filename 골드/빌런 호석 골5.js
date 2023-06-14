const input = `48 2 5 35`;

let [N, K, P, X] = input.split(" ").map((str) => parseInt(str));

let numLights = {
  0: [1, 1, 1, 0, 1, 1, 1],
  1: [0, 0, 1, 0, 0, 1, 0],
  2: [1, 0, 1, 1, 1, 0, 1],
  3: [1, 0, 1, 1, 0, 1, 1],
  4: [0, 1, 1, 1, 0, 1, 0],
  5: [1, 1, 0, 1, 0, 1, 1],
  6: [1, 1, 0, 1, 1, 1, 1],
  7: [1, 0, 1, 0, 0, 1, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1],
};

let splitX = X.toString().split("");

let count = 0;

for (let i = 1; i <= N; i++) {
  let strI = i.toString().padStart(K, "0");

  if (i === X) {
    continue;
  } else {
    let changeCount = 0;
    for (let j = 0; j < K; j++) {
      let numArr = numLights[strI[j]];
      let XArr = numLights[splitX[j]];
      for (let k = 0; k < 7; k++) {
        if (numArr[k] !== XArr[k]) {
          changeCount++;
        }
      }
    }
    if (changeCount <= P) {
      count++;
    }
  }
}

console.log(count);
