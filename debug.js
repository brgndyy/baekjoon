const input = `10101111
01011101
11001110
00000010
2
3 -1
1 1`.split("\n");

let answer = 0;

let K = Number(input[4]);

for (let i = 5; i < input.length; i++) {
  let [topNumber, dir] = input[i].split(" ").map((str) => Number(str));

  if (dir === -1) {
    if (topNumber !== 1 || topNumber !== 4) {
      if (input[topNumber - 1][2] !== input[topNumber][6]) {
        if (input[topNumber - 1][6] !== input[topNumber - 2][2]) {
          input[topNumber - 1] = input[topNumber - 1]
            .split("")
            .unshift(input[topNumber - 1].split("").pop())
            .join("");
          input[topNumber] = input[topNumber]
            .split("")
            .push(input[topNumber].split("").shift())
            .join("");
          input[topNumber - 2] = input[topNumber - 2]
            .split("")
            .push(input[topNumber - 2].split("").shift())
            .join("");
        } else {
          input[topNumber - 1] = input[topNumber - 1]
            .split("")
            .unshift(input[topNumber - 1].split("").pop())
            .join("");
          input[topNumber] = input[topNumber]
            .split("")
            .push(input[topNumber].split("").shift())
            .join("");
        }
      } else if (input[topNumber - 1][6] !== input[topNumber - 2][2]) {
        input[topNumber - 1] = input[topNumber - 1]
          .split("")
          .unshift(input[topNumber - 1].split("").pop())
          .join("");
        input[topNumber - 2] = input[topNumber - 2]
          .split("")
          .push(input[topNumber - 2].split("").shift())
          .join("");
      }
    } else if (topNumber === 1) {
      if (input[topNumber - 1][2] !== input[topNumber][6]) {
        input[topNumber - 1] = input[topNumber - 1]
          .split("")
          .unshift(input[topNumber - 1].split("").pop())
          .join("");
        input[topNumber] = input[topNumber]
          .split("")
          .push(input[topNumber].split("").shift())
          .join("");
      }
    } else if (topNumber === 4) {
      if (input[topNumber - 1][6] !== input[topNumber - 2][2]) {
        input[topNumber - 1] = input[topNumber - 1]
          .split("")
          .unshift(input[topNumber - 1].split("").pop())
          .join("");
        input[topNumber - 2] = input[topNumber - 2]
          .split("")
          .push(input[topNumber - 2].split("").shift())
          .join("");
      }
    }
  } else if (dir === 1) {
    if (topNumber !== 1 || topNumber !== 4) {
      if (input[topNumber - 1][2] !== input[topNumber][6]) {
        if (input[topNumber - 1][6] !== input[topNumber - 2][2]) {
          input[topNumber - 1] = input[topNumber - 1]
            .split("")
            .push(input[topNumber - 1].split("").shift())
            .join("");
          input[topNumber] = input[topNumber]
            .split("")
            .unshift(input[topNumber].split("").pop())
            .join("");
          input[topNumber - 2] = input[topNumber - 2]
            .split("")
            .unshift(input[topNumber - 2].split("").pop())
            .join("");
        } else {
          input[topNumber - 1] = input[topNumber - 1]
            .split("")
            .push(input[topNumber - 1].split("").shift())
            .join("");
          input[topNumber] = input[topNumber]
            .split("")
            .unshift(input[topNumber].split("").pop())
            .join("");
        }
      } else if (input[topNumber - 1][6] !== input[topNumber - 2][2]) {
        input[topNumber - 1] = input[topNumber - 1]
          .split("")
          .push(input[topNumber - 1].split("").shift())
          .join("");
        input[topNumber - 2] = input[topNumber - 2]
          .split("")
          .unshift(input[topNumber - 2].split("").pop())
          .join("");
      }
    } else if (topNumber === 1) {
      if (input[topNumber - 1][2] !== input[topNumber][6]) {
        input[topNumber - 1] = input[topNumber - 1]
          .split("")
          .push(input[topNumber - 1].split("").shift())
          .join("");
        input[topNumber] = input[topNumber]
          .split("")
          .unshift(input[topNumber].split("").pop())
          .join("");
      }
    } else if (topNumber === 4) {
      if (input[topNumber - 1][6] !== input[topNumber - 2][2]) {
        input[topNumber - 1] = input[topNumber - 1]
          .split("")
          .push(input[topNumber - 1].split("").shift())
          .join("");
        input[topNumber - 2] = input[topNumber - 2]
          .split("")
          .unshift(input[topNumber - 2].split("").pop())
          .join("");
      }
    }
  }
}

console.log(input);
