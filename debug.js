const input = `12
bnb2011 chansol
chansol chogahui05
chogahui05 jthis
jthis ChongChong
chansol jyheo98
jyheo98 lms0806
chansol pichulia
ChongChong pjshwa
pjshwa r4pidstart
r4pidstart swoon
swoon tony9402
tony9402 bnb2011`.split("\n");

let N = Number(input.shift());
let memArr = input.map((arr) => arr.split(" "));
let dancer = new Set();
dancer.add("ChongChong");

memArr.forEach((member) => {
  if (dancer.has(member[0]) || dancer.has(member[1])) {
    dancer.add(member[0]);
    dancer.add(member[1]);
  }
});

console.log(dancer);
