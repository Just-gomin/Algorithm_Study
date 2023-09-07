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
  const numerator = Math.pow(10, 9);
  const [N, K] = input[0].split(' ').map(Number);

  const dp = Array(N + 1);
  for (let i = 0; i <= N; i++) {
    dp[i] = Array(K + 1).fill(0);
  }

  for (let n = 1; n <= N; n++) {
    for (let k = 1; k <= K; k++) {
      let accumulate = 0;
      for (let i = 1; i <= n; i++) {
        accumulate += dp[i][k - 1];
      }
      dp[n][k] = (1 + accumulate) % numerator;
    }
  }

  return dp[N][K];
}

console.log(solution(input));