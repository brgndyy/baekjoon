const input = `2
3
7`.split("\n");

const N = Number(input.shift());

let allTestCase = input.map(Number);

for (let i = 0; i < N; i++) {
  const number = allTestCase[i];

  let arr = Array.from({ length: number }, (_, index) => index + 1); // 숫자배열

  dfs([], 0, number, arr); // 여기서 빈배열은 result
}

function dfs(result, depth, number, arr) {
  if (depth === number - 1) {
    let str = "";

    for (let i = 0; i < result.length; i++) {
      str += arr[i] + result[i];
    }

    str += arr[result.length];

    const sum = eval(str.split(" ").join(""));

    if (sum === 0) {
      console.log(str);
    }
    return;
  }

  for (let x of [" ", "+", "-"]) {
    result.push(x);
    dfs(result, depth + 1, number, arr);

    result.pop();
  }
}
