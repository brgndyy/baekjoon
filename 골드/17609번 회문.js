const input = `7
summuus
abba
xabba
xabbay
comcom
comwwmoc
comwwtmoc`.split("\n");

const N = Number(input.shift());

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

function isAlikePalindrome(string) {
  const splittedString = string.split("");

  for (let i = 0; i <= Math.floor(splittedString.length / 2); i++) {
    // 맨 끝 문자가 서로 달라진다면
    if (splittedString[i] !== splittedString[splittedString.length - 1 - i]) {
      const firstSplitted = isPalindrome(splittedString.slice(i, 1));
      const lastSplitted = isPalindrome(
        splittedString.slice(splittedString.length - 1, 1)
      );

      return firstSplitted || lastSplitted;
    }
    if (i === Math.floor(splittedString.length - 1 - i)) {
      return isPalindrome(splittedString.slice(i, 1).join(""));
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
