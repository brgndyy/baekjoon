const input = `3
6 0
1 1 9 1 1 1
1 0
5
4 2
1 2 3 4`.split("\n");

let TC = Number(input.shift());

let answer = [];

let queue = [];

while (input.length) {
  let documentMap = new Map();

  let splitInput = input.splice(0, 2);

  let [N, M] = [
    Number(splitInput[0].split(" ")[0]),
    Number(splitInput[0].split(" ")[1]),
  ];
  let importantArr = splitInput[1].split(" ").map((str) => Number(str));

  let documentArr = Array.from({ length: N }, (_, index) => index + 1).forEach(
    (doc, index) => documentMap.set(doc, importantArr[index])
  );

  let maxImportant = Math.max(...importantArr); // 9

  documentMap.forEach((value, key, index) => {
    if (value < maxImportant) {
      let shift = documentArr.shift();
      documentArr.push(key);
    }
  });
}
