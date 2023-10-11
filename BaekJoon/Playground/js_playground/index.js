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
  .split("\n");

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
  let answer = 0;

  const N = Number(input[0]);

  const makeDigits = (num) => {
    let result = [];

    while (num > 0) {
      result.push(num % 10);
      num = Math.floor(num / 10);
    }
    return result;
  };

  let provider = 0;
  while (++provider <= N) {
    let digits = makeDigits(provider);
    let sum = provider + digits.reduce((pre, cur, _, __) => pre + cur, 0);
    if (sum === N) return provider;
  }

  return answer;
}

console.log(solution(input));