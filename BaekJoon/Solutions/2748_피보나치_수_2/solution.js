/*
  - 문제 Link : https://www.acmicpc.net/problem/2748
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

  const n = Number(input[0]);

  let fn0 = 0;
  let fn1 = 1;

  if (n === 0) return fn0;
  else if (n === 1) return fn1;
  else {
    let i = 1;
    while (i++ < n) {
      answer = fn1 + fn0;
      fn0 = BigInt(fn1);
      fn1 = BigInt(answer);
    }
  }

  return answer.toString();
}

console.log(solution(input));
