const input = `4 7
6 13
4 8
3 6
5 12`.split("\n");

const [N, K] = input[0].split(" ").map(Number);

const dp = Array(N + 1).fill(0);

const arr = [];

for (let i = 1; i <= N; i++) {
  const [W, V] = input[i].split(" ").map(Number);

  arr.push([W, V]);
}

console.log(arr);
