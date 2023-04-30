const input = `3
124
25
194`.split("\n");

const T = Number(input[0]);

let Quater = 25;

let Dime = 10;

let Nickel = 5;

let Penny = 1;

let answer = "";

for (let i = 1; i <= T; i++) {
  let quaterCount = 0;
  let dimeCount = 0;
  let nickelCount = 0;
  let pennyCount = 0;
  let answer = "";

  let totalChange = Number(input[i]);

  quaterCount = Math.floor(totalChange / Quater);

  totalChange = totalChange - Quater * quaterCount;

  if (totalChange === 0) {
    console.log(`${quaterCount} 0 0 0`);
  }

  dimeCount = Math.floor(totalChange / Dime); // 2

  totalChange = totalChange - Dime * dimeCount;

  if (totalChange === 0) {
    console.log(`${quaterCount} ${dimeCount} 0 0`);
  }

  nickelCount = Math.floor(totalChange / Nickel);

  totalChange = totalChange - Nickel * nickelCount;

  if (totalChange === 0) {
    console.log(`${quaterCount} ${dimeCount} ${nickelCount} 0`);
  }

  pennyCount = Math.floor(totalChange / Penny);

  totalChange = totalChange - Penny * pennyCount;

  if (totalChange === 0) {
    console.log(`${quaterCount} ${dimeCount} ${nickelCount} ${pennyCount}`);
  }
}
