/*
  - 문제 Link : https://www.acmicpc.net/problem/4358
*/

const fs = require("fs");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  let counterMap = {};
  let totalAmount = input.length;

  for (let val of input) {
    let wood = val.trim();
    if (!counterMap[wood]) {
      counterMap[wood] = 0;
    }
    counterMap[wood]++;
  }

  return Object.keys(counterMap)
    .sort()
    .map(
      (wood) => `${wood} ${((counterMap[wood] / totalAmount) * 100).toFixed(4)}`
    )
    .join("\n");
};

console.log(solution(input));
