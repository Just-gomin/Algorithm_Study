/*
  - 문제 Link : https://www.acmicpc.net/problem/11399
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

  const [n, times] = [
    Number(input[0]),
    input[1]
      .split(' ')
      .map((v) => Number(v))
      .sort((a, b) => a - b)
  ];

  let acc = 0;
  for (let i = 0; i < n; i++) {
    answer += acc + times[i];
    acc += times[i];
  }

  return answer;
}

console.log(solution(input));
