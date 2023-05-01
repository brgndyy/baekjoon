const input = `4
1 3 5 7`.split("\n");

let N = Number(input[0]);
let splitInput = input[1].split(" ");

let count = 0;

for (let i = 0; i < splitInput.length; i++) {
  let decCount = 0;
  let num = Number(splitInput[i]);

  for (let j = 1; j <= num; j++) {
    if (num % j === 0) {
      decCount++;
    }
  }

  if (decCount === 2) {
    count++;
  }
}

console.log(count);
