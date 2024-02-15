const input = `9
> < < < > > > < <`.split("\n");

const k = Number(input.shift());

const inequalitySignArr = input[0].split(" ");

let visited = Array(10).fill(false);

let answerArr = [];

let result = [];

let current = "";

let first = "";

function dfs(depth) {
  if (depth === k + 1) {
    let check = true;

    for (let i = 0; i < k; i++) {
      if (inequalitySignArr[i] === "<") {
        if (result[i] > result[i + 1]) {
          check = false;
        }
      } else if (inequalitySignArr[i] === ">") {
        if (result[i] < result[i + 1]) {
          check = false;
        }
      }
    }

    if (check) {
      current = "";

      for (let x of result) {
        current += x + "";
      }

      if (first === "") {
        first = current;
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    result.push(i);
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}

dfs(0);

console.log(current + "\n" + first);
