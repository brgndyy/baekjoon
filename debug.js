const input = `3
6 0
1 1 9 1 1 1
1 0
5
4 2
1 2 3 4`.split("\n");

let T = Number(input.shift());
let answer = [];

for (let i = 0; i < input.length; i += 2) {
  let [N, M] = [Number(input[i].split(" ")[0]), Number(input[i].split(" ")[1])];

  let documents = input[i + 1]
    .split(" ")
    .map((arr, index) => [index, Number(arr)]);

  let count = 0;

  while (true) {
    let maxNum = Math.max(...documents.map((document) => document[1]));
    let curDocument = documents.shift();

    if (curDocument[1] === maxNum) {
      count++;

      if (curDocument[0] === M) {
        answer.push(count);

        break;
      }
    } else {
      documents.push(curDocument);
    }
  }
}

console.log(answer.join("\n"));
