const input = `4
1 7
2 6
3 8
4 9`.split("\n");

const N = Number(input.shift());

const tasteArr = input.map((taste) => taste.split(" ").map(Number));

let result = [];

let visited = Array(N).fill(false);

let answer = Number.MAX_SAFE_INTEGER;

function dfs(depth, start) {
  if (depth >= 1) {
    let totalSour = 1;
    let totalBitter = 0;

    for (let x of tasteArr) {
      totalSour *= x[0];
      totalBitter += x[1];
    }

    answer = Math.min(answer, Math.abs(totalSour - totalBitter));
  }

  for (let i = start; i < N; i++) {
    if (visited[i]) {
      continue;
    }

    visited[i] = true;

    result.push(i);

    dfs(depth + 1, i + 1);
    visited[i] = false;

    result.pop();
  }
}

dfs(0, 0);

console.log(answer);
