const input = `10101111
01011101
11001110
00000010
2
3 -1
1 1`.split("\n");

let answer = 0;

let inputArr = [];

for (let i = 0; i < 4; i++) {
  inputArr.push(input[i].split(""));
}

let K = Number(input[4]);

for (let i = 5; i < input.length; i++) {
  let [topNumber, dir] = input[i].split(" ").map((str) => Number(str));

  if (dir === -1) {
    if (topNumber !== 1 || topNumber !== 4) {
      if (inputArr[topNumber - 1][2] !== inputArr[topNumber][6]) {
        if (inputArr[topNumber - 1][6] !== inputArr[topNumber - 2][2]) {
          let arr1 = [...inputArr[topNumber - 1]];
          arr1.push(arr1.shift());

          let arr2 = [...inputArr[topNumber]];
          arr2.unshift(arr2.pop());

          let arr3 = [...inputArr[topNumber - 2]];
          arr3.unshift(arr3.pop());

          inputArr[topNumber - 1] = arr1;
          inputArr[topNumber] = arr2;
          inputArr[topNumber - 2] = arr3;
        } else {
          let arr1 = [...inputArr[topNumber - 1]];
          arr1.push(arr1.shift());

          let arr2 = [...inputArr[topNumber]];
          arr2.unshift(arr2.pop());

          inputArr[topNumber - 1] = arr1;
          inputArr[topNumber] = arr2;
        }
      } else if (inputArr[topNumber - 1][6] !== inputArr[topNumber - 2][2]) {
        let arr1 = [...inputArr[topNumber - 1]];
        arr1.push(arr1.shift());

        let arr3 = [...inputArr[topNumber - 2]];
        arr3.unshift(arr3.pop());

        inputArr[topNumber - 1] = arr1;
        inputArr[topNumber - 2] = arr3;
      }
    } else if (topNumber === 1) {
      if (inputArr[topNumber - 1][2] !== inputArr[topNumber][6]) {
        let arr1 = [...inputArr[topNumber - 1]];
        arr1.push(arr1.shift());

        let arr2 = [...inputArr[topNumber]];
        arr2.unshift(arr2.pop());

        inputArr[topNumber - 1] = arr1;
        inputArr[topNumber] = arr2;
      }
    } else if (topNumber === 4) {
      if (inputArr[topNumber - 1][6] !== inputArr[topNumber - 2][2]) {
        let arr1 = [...inputArr[topNumber - 1]];
        arr1.push(arr1.shift());

        let arr3 = [...inputArr[topNumber - 2]];
        arr3.unshift(arr3.pop());

        inputArr[topNumber - 1] = arr1;
        inputArr[topNumber - 2] = arr3;
      }
    }
  } else if (dir === 1) {
    if (topNumber !== 1 || topNumber !== 4) {
      if (input[topNumber - 1][2] !== input[topNumber][6]) {
        if (input[topNumber - 1][6] !== input[topNumber - 2][2]) {
          let arr1 = [...inputArr[topNumber - 1]];
          arr1.unshift(arr1.pop());

          let arr2 = [...inputArr[topNumber]];
          arr2.push(arr2.shift());

          let arr3 = [...inputArr[topNumber - 2]];
          arr3.push(arr3.shift());

          inputArr[topNumber - 1] = arr1;
          inputArr[topNumber] = arr2;
          inputArr[topNumber - 2] = arr3;
        } else {
          let arr1 = [...inputArr[topNumber - 1]];
          arr1.unshift(arr1.pop());

          let arr2 = [...inputArr[topNumber]];
          arr2.push(arr2.shift());

          inputArr[topNumber - 1] = arr1;
          inputArr[topNumber] = arr2;
        }
      } else if (input[topNumber - 1][6] !== input[topNumber - 2][2]) {
        let arr1 = [...inputArr[topNumber - 1]];
        arr1.unshift(arr1.pop());

        let arr3 = [...inputArr[topNumber - 2]];
        arr3.push(arr3.shift());

        inputArr[topNumber - 1] = arr1;
        inputArr[topNumber - 2] = arr3;
      }
    } else if (topNumber === 1) {
      if (input[topNumber - 1][2] !== input[topNumber][6]) {
        let arr1 = [...inputArr[topNumber - 1]];
        arr1.unshift(arr1.pop());

        let arr2 = [...inputArr[topNumber]];
        arr2.push(arr2.shift());

        inputArr[topNumber - 1] = arr1;
        inputArr[topNumber] = arr2;
      }
    } else if (topNumber === 4) {
      if (input[topNumber - 1][6] !== input[topNumber - 2][2]) {
        let arr1 = [...inputArr[topNumber - 1]];
        arr1.unshift(arr1.pop());

        let arr3 = [...inputArr[topNumber - 2]];
        arr3.push(arr3.shift());

        inputArr[topNumber - 1] = arr1;
        inputArr[topNumber - 2] = arr3;
      }
    }
  }
}

console.log(inputArr);
