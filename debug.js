const input = `1
3 10`.split("\n");

const N = Number(input.shift());

const tasteArr = input.map((taste) => taste.split(" ").map(Number));

let result = [];

let visited = Array(N).fill(0);

let answer = Number.MAX_SAFE_INTEGER;

function dfs(depth, start) {
  if (depth >= 1) {
    let totalSour = 1;
    let totalBitter = 0;

    for (let i = 0; i < result.length; i++) {
      let index = result[i];
      let sour = tasteArr[index][0];
      let bitter = tasteArr[index][1];

      totalSour *= sour;
      totalBitter += bitter;
    }

    answer = Math.min(answer, Math.abs(totalBitter - totalSour));
  }

  for (let i = start; i < N; i++) {
    if (visited[i]) {
      continue;
    }

    visited[i] = true;
    result.push(i);
    dfs(depth + 1, i + 1);
    result.pop();
    visited[i] = false;
  }
}

dfs(0, 0);

console.log(answer);
