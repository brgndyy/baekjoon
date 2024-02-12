const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.split("\n");

input.pop();

let answer = "";

for (let i = 0; i < input.length; i++) {
  let totalArr = input[i].split(" ").map(Number);

  let N = totalArr[0];

  let arr = totalArr.slice(1);

  let selected = [];

  dfs(0, 0, arr, selected, N);

  answer += "\n";
}

function dfs(depth, start, arr, selected, N) {
  if (depth === 6) {
    answer += selected.join(" ") + "\n";
    return;
  }

  for (let i = start; i < N; i++) {
    selected[depth] = arr[i];
    dfs(depth + 1, i + 1, arr, selected, N);
    selected.pop();
  }
}

console.log(answer.trim());
