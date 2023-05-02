const input = `7 7 7
6 5 4
3 2 5
6 2 6
0 0 0`.split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let arr = [];
  let lineOne = Number(input[i].split(" ")[0]);
  let lineTwo = Number(input[i].split(" ")[1]);
  let lineThree = Number(input[i].split(" ")[2]);

  if (lineOne === lineTwo && lineTwo === lineThree) {
    console.log("Equilateral");
  }

  arr.push(lineOne, lineTwo, lineThree);

  let arrSet = [...new Set(arr)];

  let maxLine = Math.max(...arr);

  let filteredLinesSum = arr
    .filter((num) => num !== maxLine)
    .reduce((a, b) => a + b, 0);

  if (maxLine >= filteredLinesSum) {
    console.log("Invalid");
  } else {
    if (arrSet.length === 3) {
      console.log("Scalene");
    } else if (arrSet.length === 2) {
      console.log("Isosceles");
    }
  }
}
