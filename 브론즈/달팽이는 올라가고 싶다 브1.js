const input = `5 1 6`;

let A = Number(input.split(" ")[0]); // 2
let B = Number(input.split(" ")[1]); // 1
let V = Number(input.split(" ")[2]); // 5

console.log(Math.ceil((V - B) / (A - B)));

// V-B 는 달팽이가 정상에 도달하기 전까지 이동해야하는거리
