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
  let [n, record] = [+(input[0]), input[1]];

  let answer = [...Array(n)].map(() => []);
  record = record.split(' ').map((v) => +v);

  const makeTree = (lv, inorderRecord) => {
    if (inorderRecord.length < 1) {
      return;
    } else if (inorderRecord.length === 1) {
      answer[lv].push(inorderRecord[0]);
    } else {
      let rootIdx = Math.floor(inorderRecord.length / 2);
      answer[lv].push(inorderRecord[rootIdx]);
      makeTree(lv + 1, inorderRecord.slice(0, rootIdx));
      makeTree(lv + 1, inorderRecord.slice(rootIdx + 1));
    }
  }

  makeTree(0, record);

  return answer.map((v) => v.join(' ')).join('\n');
}

console.log(solution(input));
