// 입력값이 하나일때

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split();

// 입력값 여러개고 줄바꿈 있을때

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
