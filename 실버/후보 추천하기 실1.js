const input = `3
9
2 1 4 3 5 6 2 7 2`.split("\n");

let N = Number(input.shift());
let recommendNum = Number(input.shift());
let numArr = input[0].split(" ").map((str) => Number(str));
let photosLineArr = [];

for (let i = 0; i < recommendNum; i++) {
  let recoNum = numArr[i];
  let found = photosLineArr.find((obj) => obj.id === recoNum);

  if (!found) {
    if (photosLineArr.length < N) {
      photosLineArr.push({ id: recoNum, count: 1, time: i });
    } else {
      photosLineArr.sort((a, b) => a.count - b.count || a.time - b.time);
      photosLineArr[0] = { id: recoNum, count: 1, time: i };
    }
  } else {
    found.count++;
  }
}

console.log(
  photosLineArr
    .sort((a, b) => a.id - b.id)
    .map((obj) => obj.id)
    .join(" ")
);
