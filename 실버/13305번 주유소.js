const input = `4
3 3 4
1 1 1 1`.split("\n");

const N = Number(input.shift());

const connectedCityDistanceArr = input.shift().split(" ").map(Number);

const cityArr = input.shift().split(" ").map(Number);

let minValue = Number.MAX_SAFE_INTEGER;

let answer = BigInt(0);

for (let i = 0; i < cityArr.length; i++) {
  if (cityArr[i] < minValue) {
    minValue = cityArr[i];
  }
  cityArr[i] = minValue;
}

for (let j = 0; j < connectedCityDistanceArr.length; j++) {
  answer += BigInt(cityArr[j]) * BigInt(connectedCityDistanceArr[j]);
}

console.log(answer.toString());
