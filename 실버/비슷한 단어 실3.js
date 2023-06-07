const input = `4
DOG
GD
GOD
GOOD
DOLL`.split("\n");

let N = Number(input.shift());
let standardWord = input.shift().split("");
let count = 0;

for (let i = 0; i < input.length; i++) {
  let str = input[i].split("");
  for (let j = 0; j < standardWord.length; j++) {
    if (str.includes(standardWord[j])) {
      str.splice(str.indexOf(standardWord[j]), 1);
      j = -1;
    }
  }

  if (str.length === 0 || str.length === 1) {
    count++;
  }
}

console.log(count);
