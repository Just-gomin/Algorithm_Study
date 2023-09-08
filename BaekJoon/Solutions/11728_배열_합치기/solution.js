/*
  - 문제 Link : https://www.acmicpc.net/problem/11728

  # Solution
  - 첫째 줄에 배열 A의 크기 N, 배열 B의 크기 M (1 ≤ N, M ≤ 1,000,000)
  - 둘째 줄에는 배열 A의 내용이, 셋째 줄에는 배열 B의 내용
  - 배열에 들어있는 수는 절댓값이 109보다 작거나 같은 정수

  - input[1] & input[2]를 각각 map(Number)를 수행하고, 배열 arr에 구조 분해 할당한다.
  - arr.sort((a,b) => a - b)를 수행한다.
  - arr.join(' ')를 수행한다.
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

const solution = (input) => [
  ...input[1].split(' ').map(Number),
  ...input[2].split(' ').map(Number)
].sort((a, b) => a - b).join(' ');


console.log(solution(input));
