let input = "qwerty";
let combinedWord;
let reverseInput = input.split("").reverse().join("");

if (input === reverseInput) {
  console.log(input.length);
}

for (let i = input.length - 2; i >= 0; i--) {
  combinedWord = input + input[i];

  if (combinedWord === combinedWord.split("").reverse().join("")) {
    break;
  }
}

console.log(combinedWord.length);
