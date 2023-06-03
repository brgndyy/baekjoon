const input = `4
DOG
DLO
GOOD
GOD
DOL`.split("\n");

let N = Number(input.shift());
let standardWord = input.shift().split("");
let someWords = input.map((str) => str.split(""));

function solution(standardWord, someWords) {
  let answer = 0;

  someWords.forEach((v) => {
    const start = [...standardWord];

    if (v.length < start.length) {
      for (let i = 0; i < v.length; i++) {
        if (start.includes(v[i])) {
          const idx = start.indexOf(v[i]);
          start.splice(idx, 1);
        }
      }
      if (start.length === 1) {
        answer++;
      }
    } else {
      for (let i = 0; i < start.length; i++) {
        if (v.includes(start[i])) {
          const idx = v.indexOf(start[i]);
          v.splice(idx, 1);
        }
      }
      if (v.length === 1 || v.length === 0) {
        answer++;
      }
    }
  });

  return answer;
}

console.log(solution(standardWord, someWords));
