/*
  - 문제 Link : https://www.acmicpc.net/problem/14425
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(n, m, inputs = []) {
  let answer = 0;

  let stringSet = new Set();

  inputs.slice(0, n).forEach((v) => stringSet.add(v));
  inputs.slice(n, n + m).forEach((v) => (answer += stringSet.has(v) ? 1 : 0));

  return answer;
}

function main(input = []) {
  const [n, m] = input[0].split(" ");

  let answer = [];

  answer = solution(parseInt(n), parseInt(m), input.splice(1));

  console.log(answer);
}

main(input);
