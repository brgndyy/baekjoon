const input = `}{
  {{{}{}}}
  {{}{
  ---`.split("\n");

let answer = "";
// ['{', '}', '}', '}']

for (let i = 0; i < input.length - 1; i++) {
  let count = 0;
  let splitWord = input[i].split("").slice(input[i].length / 2);

  for (let j = 0; j < splitWord.length; j++) {
    if (splitWord[j] === "{" && input[i][input[i].length - 1 - j] !== "}") {
      count += 1;
    }
  }
}

console.log(count);
