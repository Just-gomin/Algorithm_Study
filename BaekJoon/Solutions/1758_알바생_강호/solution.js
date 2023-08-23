/*
  - 문제 Link : https://www.acmicpc.net/problem/1758
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
  const [n, tips] = [+input[0], input.splice(1).map((i) => +i).sort((a, b) => b - a)];

  answer = tips.reduce((preval, curval, i, _) => preval += curval - i < 0 ? 0 : curval - i, answer);

  return answer;
}

console.log(solution(input));
