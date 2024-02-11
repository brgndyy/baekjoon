const input = `4
1 7
2 6
3 8
4 9`.split("\n");

const N = Number(input.shift());

const tasteArr = input.map((taste) => taste.split(" ").map(Number));

let visited = Array(N).fill(false);

let result = [];

let answer = Number.MAX_SAFE_INTEGER;

function dfs(depth, start) {
  if (depth >= 1) {
    let totalSour = 1;
    let totalBitter = 0;

    for (let x of tasteArr) {
      let sour = x[0];
      let bitter = x[1];

      totalSour *= sour;
      totalBitter += bitter;
    }

    answer = Math.min(answer, Math.abs(totalBitter - totalSour));
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) {
      continue;
    }

    visited[i] = true;
    result.push(i);
    dfs(depth + 1, start + 1);
    result.pop();
    visited[i] = false;
  }
}

dfs(0, 0);

console.log(answer);
