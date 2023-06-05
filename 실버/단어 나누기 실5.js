const input = `mobitel`;

let word = input;

let minWord = input; // Start with the original word

// Iterate through all possible splits of the word into three parts
for (let i = 1; i < word.length - 1; i++) {
  for (let j = i + 1; j < word.length; j++) {
    let part1 = word.slice(0, i).split("").reverse().join("");
    let part2 = word.slice(i, j).split("").reverse().join("");
    let part3 = word.slice(j).split("").reverse().join("");

    let newWord = part1 + part2 + part3;

    if (newWord < minWord) {
      minWord = newWord; // Update if we found a word that is lexicographically smaller
    }
  }
}

console.log(minWord);
