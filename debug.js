const input = `2
3
7`.split("\n");

const N = Number(input.shift());

const numArr = input.map(Number);

for (let i = 0; i < N; i++) {
  const number = numArr[i];

  const arr = Array.from({ length: number }, (_, index) => index + 1);

  dfs([], 0, number, arr);
}

function dfs(result, depth, number, arr) {
  if (depth === number - 1) {
    let answer = "";

    for (let i = 0; i < result.length; i++) {
      answer += arr[i] + result[i];
    }

    answer += arr[result.length]; // result.length 까지면 마지막 숫자는 추가가 안되므로 마지막숫자를 더해준다.

    let sum = eval(answer.split(" ").join(""));

    if (sum === 0) {
      console.log(answer);
    }
    return;
  }

  for (let x of [" ", "+", "-"]) {
    result.push(x);

    dfs(result, depth + 1, number, arr);

    result.pop();
  }
}
