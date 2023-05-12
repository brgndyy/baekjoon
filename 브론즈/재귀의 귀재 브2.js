const input = `5
AAA
ABBA
ABABA
ABCA
PALINDROME`.split("\n");

let T = Number(input[0]);

let answer = [];

function recursion(s, l, r, count) {
  if (l >= r) {
    answer.push(1, count);
    return;
  } else if (s[l] != s[r]) {
    answer.push(0, count);
    return;
  } else return recursion(s, l + 1, r - 1, (count += 1));
}

function isPalindrome(s, count) {
  return recursion(s, 0, s.length - 1, count);
}

for (let i = 1; i < input.length; i++) {
  let count = 1;

  isPalindrome[(input[i], count)];
}

console.log(answer);
