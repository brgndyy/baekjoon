const input = `5
5
4
3
2
1`.split("\n");

let N = input.shift();

let inputArr = input.sort((a, b) => {
  if (Number(b) < Number(a)) {
    Number(b) - Number(a);
    console.log(a);
  } else {
    console.log(b);
  }
});
