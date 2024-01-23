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

function isAlikePalindrome(string) {
  for (let i = 0; i <= Math.floor(string.length / 2); i++) {
    // 맨 끝 문자가 서로 달라진다면
    if (string[i] !== string[string.length - 1 - i]) {
    }
  }
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
