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
  const [n, k] = input[0].split(' ').map((v) => Number(v));
  const pairs = input.slice(1).map((v) => v.split(' ').map((v2) => Number(v2))); // [weight, value] pairs

  const basket = Array(k + 1).fill(0);

  for (let w = 1; w <= k; w++) {
    let maxValue = basket[w - 1];

    for (let i = 0; i < n; i++) {
      const [iw, iv] = pairs[i];
      if (w - iw >= 0) {
        maxValue = Math.max(maxValue, basket[w - iw] + iv);
      }
    }

    basket[w] = maxValue;
  }

  return basket[k];
}

console.log(solution(input));