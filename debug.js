const input = `6
LFFRFF`.split("\n");

let map = Array(101)
  .fill(null)
  .map(() => Array(101).fill(0));
let direction = 0; //South(0), West(1), North(2), East(3)
let N, R, C;
let R_min, R_max, C_min, C_max;
let s;

N = Number(input[0]);
s = input[1];

R = C = 50;
map[R][C] = 1;
R_min = 50;
C_min = 50;
R_max = 50;
C_max = 50;

for (let i = 0; i < N; i++) {
  // Handle L,R,F command
  if (s[i] === "L") direction--;
  else if (s[i] === "R") direction++;
  else if (s[i] === "F") {
    if (direction === 0) R++;
    else if (direction === 1) C--;
    else if (direction === 2) R--;
    else if (direction === 3) C++;
    map[R][C] = 1;
  }

  if (direction < 0) direction += 4;
  else if (direction >= 4) direction -= 4;

  R_min = Math.min(R_min, R);
  C_min = Math.min(C_min, C);
  R_max = Math.max(R_max, R);
  C_max = Math.max(C_max, C);
}

for (let i = R_min; i <= R_max; i++) {
  let row = "";
  for (let j = C_min; j <= C_max; j++) {
    row += map[i][j] ? "." : "#";
  }
  console.log(row);
}
