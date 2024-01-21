const input = `7
abba
summuus
xabba
xabbay
comcom
comwwmoc
comwwtmoc`.split("\n");

const N = Number(input.shift());

function isPalindrome(string) {
  const splittedString = string.split("");
}

for (let i = 0; i < N; i++) {
  if (isPalindrome(input[i])) {
    console.log(0);
  } else if (isAlikePalindrome(input[i])) {
    console.log(1);
  } else {
    console.log(2);
  }
}
