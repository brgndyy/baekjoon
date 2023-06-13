const input = `3 2
1 2 1 2 1 2`.split("\n");

let [N, K] = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

let arr = input
  .shift()
  .split(" ")
  .map((str) => Number(str));

// 배열에서 0의 개수를 세는 함수
const getZeroCount = (arr) =>
  arr.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0);

// 배열을 회전 시키는 함수
const rotate = (arr, robots) => {
  const last = arr.pop();
  arr.unshift(last);

  robots.pop();
  robots.unshift(false);
};

// 로봇이 이동할수 있는지 판단하고 이동시키는 함수
// 다음 위치에 로봇이 없고 벨트 내구도가 1이상일때만 가능
const moveRobots = (arr, robots, N) => {
  for (let i = N - 2; i > -1; i--) {
    if (!robots[i]) continue;

    if (!robots[i + 1] && arr[i + 1] > 0) {
      robots[i + 1] = true;
      robots[i] = false;
      arr[i + 1] -= 1;
    }
  }
};

// 첫번째 위치에 로봇을 추가하는 함수
// 벨트 내구도가 0이 아니어야 가능
const addRobot = (arr, robots) => {
  if (arr[0] > 0) {
    arr[0] -= 1;
    robots[0] = true;
  }
};

// n번째 위치의 로봇을 제거하는 함수
const removeNthRobot = (robots, n) => {
  robots[n] = false;
};

const solution = (N, K, arr) => {
  const robots = new Array(N).fill(false);
  let stage = 0;

  while (getZeroCount(arr) < K) {
    stage++;
    rotate(arr, robots);
    if (robots[N - 1]) removeNthRobot(robots, N - 1);

    moveRobots(arr, robots, N);
    if (robots[N - 1]) removeNthRobot(robots, N - 1);

    addRobot(arr, robots);
  }

  return stage;
};

console.log(solution(N, K, arr));
