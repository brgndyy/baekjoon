const input = `5
ZG206A
PU234Q
OS945CK
ZG431SN
ZG5962J
ZG5962J
OS945CK
ZG206A
PU234Q
ZG431SN`.split("\n");

const num = Number(input[0]);

let count = 0;
const DG = input.splice(1, num);

const YS = input.splice(1, num);
let count = 0;

for (let i = 0; i < DG.length; i++) {
  let DGIndex = DG.indexOf(DG[i]); // 0
  let YSIndex = YS.indexOf(DG[i]); // 3

  if (YSIndex < DGIndex) {
    count++;
  }
}

console.log(count);
