const input = `7 3`;

let [N, K] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];

let numArr = Array.from({ length: N }, (_, index) => index + 1);

let answer = [];

let indexNum = K - 1;

while (answer.length !== N) {


  answer.push(numArr.splice(indexNum, 1));

  indexNum +=

  
}

console.log(answer);
