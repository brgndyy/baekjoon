const input = `5
ZG508OK
PU305A
RI604B
ZG206A
ZG232ZF
PU305A
ZG232ZF
ZG206A
ZG508OK
RI604B`.split("\n");

const num = Number(input[0]);
const DG = input.splice(1, num);

console.log(DG);
