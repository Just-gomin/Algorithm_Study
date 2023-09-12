// ------------------------------
// Input with File System
// ------------------------------

// Read Inputs (from. https://help.acmicpc.net/language/info [node.js & TypeScript])
const fs = require("fs");
const { exit } = require("process");

// 입력값 파일 경로 결정
// node 실행 시 환경변수 [RUNNING_ON]을 "local"라는 값을 부여하여 '백준 온라인' 과 '로컬' 환경 구분
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

// 입력 값
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

// ------------------------------
// Input with Read Line
// ------------------------------

// // Read Inputs (from. https://velog.io/@leenzy/readline-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

function solution(input) {
  const [N, X] = input[0].split(" ").map(Number);
  const visitors = input[1].split(" ").map(Number);

  let max = visitors.slice(0, X).reduce((pre, cur, i, arr) => pre + cur, 0);
  let curSum = max;
  let history = 1;

  for (let i = 0; i < N - X; i++) {
    curSum = curSum - visitors[i] + visitors[i + X];
    if (curSum > max) {
      max = curSum;
      history = 1;
    } else if (curSum === max) {
      history += 1;
    }
  }

  return max === 0 ? "SAD" : `${max}\n${history}`;
}

console.log(solution(input));