/*
  - 문제 Link : https://www.acmicpc.net/problem/20053
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
  let answer = [];
  const T = Number(input[0]);
  for (let i = 1; i <= T; i++) {
    const nums = input[2 * i].split(' ').map(Number);
    answer.push(`${Math.min(...nums)} ${Math.max(...nums)}`);
  }
  return answer.join('\n');
}

console.log(solution(input));
