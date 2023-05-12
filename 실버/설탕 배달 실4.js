let input = `18`;

let N = Number(input);

let count = 0;

let fiveCount = 0;

while (N > 0) {
  N -= 5;
  count++;
  N -= 3;
  count++;

  if (N < 0) {
    console.log(-1);
  }
}

console.log(count);

// 5 한번 빼주고 count ++;
// 3 한번 빼주고 count ++;
