let input = "abdfhdyrbdbsdfghjkllkjhgfds"; // length = 27;

let reverseInput = input.split("").reverse().join("");

if (input === reverseInput) {
  console.log(input.length);
}

for (let i = input.length - 2; i >= 0; i--) {
  input += input[i];

  if (input === input.split("").reverse().join("")) {
    break;
  }
}

console.log(input.length);
