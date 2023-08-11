/*
  - 문제 Link : https://www.acmicpc.net/problem/22864

  - A: 피로도 (1시간 작업 시)
  - B: 작업량 (1시간 동안 작업)
  - C: 회복량 (1시간 휴식)
  - M: 최대 피로도
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

  const [A, B, C, M] = input[0].split(' ').map((v) => +v);

  let curExhuation = 0;

  for (let h = 0; h < 24; h++) {

    if (curExhuation + A > M) {
      curExhuation -= C;
      if (curExhuation < 0) curExhuation = 0;
    } else {
      answer += B;
      curExhuation += A;
    }
  }

  return answer;
}

console.log(solution(input));
