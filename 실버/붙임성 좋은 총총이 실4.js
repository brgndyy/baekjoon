const input = `12
bnb2011 chansol
chansol chogahui05
chogahui05 jthis
jthis ChongChong
jthis jyheo98
jyheo98 lms0806
chansol pichulia
ChongChong pjshwa
pjshwa r4pidstart
r4pidstart swoon
swoon tony9402
tony9402 bnb2011`.split("\n");

let N = Number(input.shift());

let newDancers = input.map((arr) => arr.split(" ").join(" "));

console.log(newDancers);
