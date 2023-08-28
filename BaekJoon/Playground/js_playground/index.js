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
  let answer = [];

  const [numOfCases, cases] = [Number(input[0]), input.splice(1)];

  const limit = 30;
  const archive = new Array(limit);
  for (let i = 0; i < limit; i++) {
    archive[i] = new Array(limit).fill(i === 0 ? 0 : -1);
  }

  const buildBridge = (n, m) => {
    if (n < 1) return 0;
    if (n === 1) return m;
    if (n === m) return 1;
    if (archive[n][m] !== -1) return archive[n][m];

    let numOfMethods = 0;
    for (let i = 0; i <= m - n; i++) {
      numOfMethods += buildBridge(n - 1, m - 1 - i);
    }

    archive[n][m] = numOfMethods;

    return numOfMethods;
  };

  for (let i = 0; i < numOfCases; i++) {
    const [n, m] = cases[i].split(" ").map((v) => Number(v));
    answer.push(buildBridge(n, m));
  }

  return answer.join("\n");
}

console.log(solution(input));