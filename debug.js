let input = ["INT", "BOOL", "SHORT", "FLOAT", "LONG", "BOOL"];

let type = {
  BOOL: 1,
  SHORT: 2,
  FLOAT: 4,
  INT: 8,
  LONG: 16,
};

function solution(input) {
  let totalSize = 0;
  let 지금까지메모리 = "";
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    let curSize = type[input[i]];

    if (curSize === 8) {
      if (지금까지메모리.length > 0) {
        지금까지메모리 = 지금까지메모리.padEnd(8, ".");
        answer.push(지금까지메모리);
        지금까지메모리 = "";
        answer.push("########");
      } else {
        answer.push("########");
      }
    } else if (curSize === 16) {
      if (지금까지메모리.length > 0) {
        지금까지메모리 = 지금까지메모리.padEnd(8, ".");
        answer.push(지금까지메모리);
        지금까지메모리 = "";
        answer.push("########");
        answer.push("########");
      } else {
        answer.push("########");
        answer.push("########");
      }
    } else if (curSize === 4) {
      if (지금까지메모리.length === 1) {
        지금까지메모리 = "#....####";
        answer.push(지금까지메모리);
        지금까지메모리 = "";
      } else {
        if (지금까지메모리.length + curSize > 8) {
          지금까지메모리 = 지금까지메모리.padEnd(8, ".");
          answer.push(지금까지메모리);
          지금까지메모리 = "#".repeat(curSize);
        } else if (지금까지메모리.length + curSize === 8) {
          지금까지메모리 += "####";
          answer.push(지금까지메모리);
          지금까지메모리 = "";
        } else if (지금까지메모리.length + curSize < 8) {
          지금까지메모리 += "####";
        }
      }
    } else if (curSize === 2) {
      if (지금까지메모리.length === 1) {
        지금까지메모리 = "#.##";
      } else if (지금까지메모리.length + curSize === 8) {
        지금까지메모리 += "##";
        answer.push(지금까지메모리);
        지금까지메모리 = "";
      } else if (지금까지메모리.length + curSize > 8) {
        지금까지메모리 = 지금까지메모리.padEnd(8, ".");
        answer.push(지금까지메모리);
        지금까지메모리 = "";
        지금까지메모리 += "#".repeat(curSize);
      } else if (지금까지메모리.length + curSize < 8) {
        지금까지메모리 += "##";
      }
    } else if (curSize === 1) {
      지금까지메모리 += "#";
    }
  }

  if (지금까지메모리.length > 0) {
    지금까지메모리 = 지금까지메모리.padEnd(8, ".");
    answer.push(지금까지메모리);
    지금까지메모리 = "";
  }

  if (answer.length > 16) {
    return "HALT";
  } else {
    return answer;
  }
}

console.log(solution(input));
