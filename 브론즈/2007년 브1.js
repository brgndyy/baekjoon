const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [month, day] = [Number(input.split(" ")[0]), Number(input.split(" ")[1])];

let totalDay = 0;

month -= 1;

while (month > 0) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    totalDay += 31;
    month--;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    totalDay += 30;
    month--;
  } else if (month === 2) {
    totalDay += 28;
    month--;
  }
}

totalDay += day;
if (totalDay % 7 === 0) {
  console.log("SUN");
} else if (totalDay % 7 === 1) {
  console.log("MON");
} else if (totalDay % 7 === 2) {
  console.log("TUE");
} else if (totalDay % 7 === 3) {
  console.log("WED");
} else if (totalDay % 7 === 4) {
  console.log("THU");
} else if (totalDay % 7 === 5) {
  console.log("FRI");
} else if (totalDay % 7 === 6) {
  console.log("SAT");
}
