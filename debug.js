const input = `5
2 3 1 6 5 4
3 1 2 4 6 5
5 6 4 1 3 2
1 3 6 2 4 5
4 1 6 5 2 3`.split("\n");

let N = Number(input.shift());
// 0번째 인덱스 = 맨윗칸 A
// 1번째 인덱스 = 서쪽 B
// 2번째 인덱스 = 남쪽 C
// 3번째 인덱스 = 동쪽 D
// 4번째 인덱스 = 북쪽 E
// 5번째 인덱스 = 맨밑칸F
// 0과 5, 1과 3, 2와 4 가 서로 대치됨
// 만약 두 수중에 한개가 맨 밑칸이나 맨 윗칸이면 나머지 칸은 자동으로 나머지 칸을 차지하게됨
let diceArr = input.map((arr) => arr.split(" ").map((str) => Number(str)));
// 0번째 인덱스와 5번째 인덱스가 서로 값이 같아야함.
// 하지만 최댓값을 구해야하므로 가장 최대값이 맨밑칸이나 맨윗칸이 되면 안됨

let firstDice = diceArr.shift();

let minNum = Math.min(...firstDice);

let numberOneIndex = firstDice.indexOf(minNum);
let numberOneMatchIndex = 0;
let numberOneMatchNum = 0;
let bottomNum = 0;
let answer = 0;
let caseOneMaxNum = 0;
let caseTwoMaxNum = 0;

if (numberOneIndex === 0) {
  numberOneMatchIndex = 5;
} else if (numberOneIndex === 1) {
  numberOneMatchIndex = 3;
} else if (numberOneIndex === 2) {
  numberOneMatchIndex = 4;
} else if (numberOneIndex === 3) {
  numberOneMatchIndex = 1;
} else if (numberOneIndex === 4) {
  numberOneMatchIndex = 2;
} else if (numberOneIndex === 5) {
  numberOneMatchIndex = 0;
}

numberOneMatchNum = firstDice[numberOneMatchIndex];

bottomNum = minNum;

let nums = [];

for (let i = 0; i < firstDice.length; i++) {
  if (firstDice[i] === bottomNum || firstDice[i] === numberOneMatchNum) {
    continue;
  } else {
    nums.push(firstDice[i]);
  }
}

// 처음에 가장 큰 수 더해주기
let firstMaxNum = Math.max(...nums);

// 밑에 주사위 숫자가 1일때
if (bottomNum === minNum) {
  let topNum = numberOneMatchNum;
  let sum = firstMaxNum;

  for (let i = 0; i < N - 1; i++) {
    let matchBottomIndex = diceArr[i].indexOf(topNum);
    bottomNum = diceArr[i][matchBottomIndex];
    let matchTopIndex = 0;
    let numArr = [];

    if (matchBottomIndex === 0) {
      matchTopIndex = 5;
    } else if (matchBottomIndex === 1) {
      matchTopIndex = 3;
    } else if (matchBottomIndex === 2) {
      matchTopIndex = 4;
    } else if (matchBottomIndex === 3) {
      matchTopIndex = 1;
    } else if (matchBottomIndex === 4) {
      matchTopIndex = 2;
    } else if (matchBottomIndex === 5) {
      matchTopIndex = 0;
    }

    topNum = diceArr[i][matchTopIndex];

    // 주사위에서 가장 큰 수 넣어주기

    for (let j = 0; j < diceArr[i].length; j++) {
      if (diceArr[i][j] === topNum || diceArr[i][j] === bottomNum) {
        continue;
      } else {
        numArr.push(diceArr[i][j]);
      }
    }

    sum += Math.max(...numArr);
  }

  caseOneMaxNum = sum;
}

// 밑에 바닥 숫자 1이 아닌 1에 대응하는 숫자로 초기화
bottomNum = numberOneMatchNum;

if (bottomNum === numberOneMatchNum) {
  let topNum = minNum;
  let sum = firstMaxNum;

  for (let i = 0; i < N - 1; i++) {
    let matchBottomIndex = diceArr[i].indexOf(topNum);
    bottomNum = diceArr[i][matchBottomIndex];
    let matchTopIndex = 0;
    let numArr = [];

    if (matchBottomIndex === 0) {
      matchTopIndex = 5;
    } else if (matchBottomIndex === 1) {
      matchTopIndex = 3;
    } else if (matchBottomIndex === 2) {
      matchTopIndex = 4;
    } else if (matchBottomIndex === 3) {
      matchTopIndex = 1;
    } else if (matchBottomIndex === 4) {
      matchTopIndex = 2;
    } else if (matchBottomIndex === 5) {
      matchTopIndex = 0;
    }

    topNum = diceArr[i][matchTopIndex];

    for (let j = 0; j < diceArr[i].length; j++) {
      if (diceArr[i][j] === topNum || diceArr[i][j] === bottomNum) {
        continue;
      } else {
        numArr.push(diceArr[i][j]);
      }
    }

    sum += Math.max(...numArr);
  }

  caseTwoMaxNum = sum;
}

caseOneMaxNum >= caseTwoMaxNum
  ? (answer = caseOneMaxNum)
  : (answer = caseTwoMaxNum);

console.log(answer);
