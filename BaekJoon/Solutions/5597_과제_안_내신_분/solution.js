/*
  - 문제 Link : https://www.acmicpc.net/problem/5597
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
  const check = new Array(31).fill(false);
  const studentArr = input.map(v => Number(v.trim()));

  studentArr.map((v) => {
    check[v] = true;
  });

  for (let i = 1; i <= 30; i++) {
    if (!check[i]) answer.push(i);
    if (answer.length === 2) break;
  }

  return answer.join('\n');
}

console.log(solution(input));
