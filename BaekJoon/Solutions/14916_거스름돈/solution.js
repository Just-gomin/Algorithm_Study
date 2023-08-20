/*
  - 문제 Link : https://www.acmicpc.net/problem/14916
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
  let answer = -1;
  let exchange = +input[0];

  let n5 = Math.floor(exchange / 5);
  let n2 = 0;

  while (n5 > -1) {
    if ((exchange - 5 * n5) % 2 === 0) {
      n2 = (exchange - 5 * n5) / 2;

      answer = n5 + n2;
      break;
    }

    n5 -= 1;
  }

  return answer;
}

console.log(solution(input));
