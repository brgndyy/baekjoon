const input = `10010011
01010011
11100011
01010101
8
1 1
2 1
3 1
4 1
1 -1
2 -1
3 -1
4 -1`.split("\n");

let topniArr = [];

for (let i = 0; i < 4; i++) {
  let topni = input
    .shift()
    .split("")
    .map((str) => Number(str));

  topniArr.push(topni);
}

let sum = 0;

let K = Number(input.shift());

for (let i = 0; i < K; i++) {
  let [rotateIndex, rotateDir] = input[i].split(" ").map((str) => Number(str));

  rotateIndex -= 1;

  if (
    (rotateDir === -1 && rotateIndex === 1) ||
    (rotateDir === -1 && rotateIndex === 2)
  ) {
    if (
      topniArr[rotateIndex][6] !== topniArr[rotateIndex - 1][2] &&
      topniArr[rotateIndex][2] !== topniArr[rotateIndex + 1][6]
    ) {
      topniArr[rotateIndex - 1].unshift(topniArr[rotateIndex - 1].pop());
      topniArr[rotateIndex + 1].unshift(topniArr[rotateIndex + 1].pop());
      topniArr[rotateIndex].push(topniArr[rotateIndex].shift());
    } else if (
      topniArr[rotateIndex][6] !== topniArr[rotateIndex - 1][2] &&
      topniArr[rotateIndex][2] === topniArr[rotateIndex + 1][6]
    ) {
      topniArr[rotateIndex - 1].unshift(topniArr[rotateIndex - 1].pop());
      topniArr[rotateIndex].push(topniArr[rotateIndex].shift());
    } else if (
      topniArr[rotateIndex][6] === topniArr[rotateIndex - 1][2] &&
      topniArr[rotateIndex][2] !== topniArr[rotateIndex + 1][6]
    ) {
      topniArr[rotateIndex + 1].unshift(topniArr[rotateIndex + 1].pop());
      topniArr[rotateIndex].push(topniArr[rotateIndex].shift());
    } else if (
      topniArr[rotateIndex][6] === topniArr[rotateIndex - 1][2] &&
      topniArr[rotateIndex][2] === topniArr[rotateIndex + 1][6]
    ) {
      continue;
    }
  } else if (rotateDir === -1 && rotateIndex === 0) {
    if (topniArr[rotateIndex][2] !== topniArr[rotateIndex + 1][6]) {
      topniArr[rotateIndex].push(topniArr[rotateIndex].shift());
      topniArr[rotateIndex + 1].unshift(topniArr[rotateIndex + 1].pop());
    } else if (topniArr[rotateIndex][2] === topniArr[rotateIndex + 1][6]) {
      continue;
    }
  } else if (rotateDir === -1 && rotateIndex === 3) {
    if (topniArr[rotateIndex][6] !== topniArr[rotateIndex - 1][2]) {
      topniArr[rotateIndex].push(topniArr[rotateIndex].shift());
      topniArr[rotateIndex - 1].unshift(topniArr[rotateIndex - 1].pop());
    } else if (topniArr[rotateIndex][6] === topniArr[rotateIndex - 1][2]) {
      continue;
    }
  } else if (
    (rotateDir === 1 && rotateIndex === 1) ||
    (rotateDir === 1 && rotateIndex === 2)
  ) {
    if (
      topniArr[rotateIndex][2] !== topniArr[rotateIndex + 1][6] &&
      topniArr[rotateIndex][6] !== topniArr[rotateIndex - 1][2]
    ) {
      topniArr[rotateIndex].unshift(topniArr[rotateIndex].pop());
      topniArr[rotateIndex - 1].push(topniArr[rotateIndex - 1].shift());
      topniArr[rotateIndex + 1].push(topniArr[rotateIndex + 1].shift());
    } else if (
      topniArr[rotateIndex][2] === topniArr[rotateIndex + 1][6] &&
      topniArr[rotateIndex][6] !== topniArr[rotateIndex - 1][2]
    ) {
      topniArr[rotateIndex].unshift(topniArr[rotateIndex].pop());
      topniArr[rotateIndex - 1].push(topniArr[rotateIndex - 1].shift());
    } else if (
      topniArr[rotateIndex][2] !== topniArr[rotateIndex + 1][6] &&
      topniArr[rotateIndex][6] === topniArr[rotateIndex - 1][2]
    ) {
      topniArr[rotateIndex].unshift(topniArr[rotateIndex].pop());
      topniArr[rotateIndex + 1].push(topniArr[rotateIndex + 1].shift());
    } else if (
      topniArr[rotateIndex][2] === topniArr[rotateIndex + 1][6] &&
      topniArr[rotateIndex][6] === topniArr[rotateIndex - 1][2]
    ) {
      continue;
    }
  } else if (rotateDir === 1 && rotateIndex === 0) {
    if (topniArr[rotateIndex][2] !== topniArr[rotateIndex + 1][6]) {
      topniArr[rotateIndex].unshift(topniArr[rotateIndex].pop());
      topniArr[rotateIndex + 1].push(topniArr[rotateIndex + 1].shift());
    } else if (topniArr[rotateIndex][2] === topniArr[rotateIndex + 1][6]) {
      continue;
    }
  } else if (rotateDir === 1 && rotateIndex === 3) {
    if (topniArr[rotateIndex][6] !== topniArr[rotateIndex - 1][2]) {
      topniArr[rotateIndex].unshift(topniArr[rotateIndex].pop());
      topniArr[rotateIndex - 1].push(topniArr[rotateIndex - 1].shift());
    } else if (topniArr[rotateIndex][6] === topniArr[rotateIndex - 1][2]) {
      continue;
    }
  }
}

for (let i = 0; i < topniArr.length; i++) {
  if (i === 0) {
    if (topniArr[i][0] === 1) {
      sum += 1;
    } else if (topniArr[i][0] === 0) {
      sum += 0;
    }
  } else if (i == 1) {
    if (topniArr[i][0] === 1) {
      sum += 2;
    } else if (topniArr[i][0] === 0) {
      sum += 0;
    }
  } else if (i === 2) {
    if (topniArr[i][0] === 1) {
      sum += 4;
    } else if (topniArr[i][0] === 0) {
      sum += 0;
    }
  } else if (i === 3) {
    if (topniArr[i][0] === 1) {
      sum += 8;
    } else if (topniArr[i][0] === 0) {
      sum += 0;
    }
  }
}

console.log(sum);
