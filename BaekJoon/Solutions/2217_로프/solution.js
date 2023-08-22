/*
  - 문제 Link : https://www.acmicpc.net/problem/2217
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

function solution(input) {
  let answer = 0;

  const [n, ropes] = [+input[0], input.splice(1).map((i) => +i).sort((a, b) => a - b)];

  for (let i = 0; i < n; i++) {
    let maxWeight = ropes[i] * (n - i);
    if (answer < maxWeight) answer = maxWeight;
  }

  return answer;
}

console.log(solution(input));
