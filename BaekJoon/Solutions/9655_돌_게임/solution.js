/*
  - 문제 Link : https://www.acmicpc.net/problem/9655

  # Solution
  - 1 <= n <= 1000
  - 각 차례마다 1또는 3개만큼 돌을 가져갈수 있다.
  - 상근이가 먼저 시작한다 => 상근이는 항상 홀수 번째 돌을 집는다.
  - n이 홀수면 상근이가 항상 이긴다.
  - n이 짝수면 창영이가 항상 이긴다.
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
  return Number(input[0]) % 2 ? "SK" : "CY";
}

console.log(solution(input));
