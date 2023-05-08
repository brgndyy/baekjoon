const input = `3
ENTER
lms0806
lms0806`.split("\n");

let N = input.shift();

let chatRoom = input.join(" ").split("ENTER");

let filtered = chatRoom.map((arr) => arr.trim()).filter((arr) => arr !== "");

let count = 0;

for (let i = 0; i < filtered.length; i++) {
  let splitMem = filtered[i].split(" ");

  let len = new Set([...splitMem]).size;

  count += len;
}

console.log(count);
