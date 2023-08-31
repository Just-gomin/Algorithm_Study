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

  const n = Number(input[0].split(' ')[0])

  const area = [];
  input
    .slice(1, n + 1)
    .forEach(element => {
      let line = [0];
      let accumulate = 0;

      element
        .split(' ')
        .forEach((v) => {
          line.push(accumulate += Number(v));
        });

      area.push(line);
    });

  input.slice(n + 2).forEach(test => {
    const [x1, y1, x2, y2] = test.split(' ').map((v) => Number(v));
    answer.push(
      area
        .slice(x1 - 1, x2)
        .reduce(
          (prev, line) => prev + (line[y2] - line[y1 - 1])
          , 0)
    );
  });

  return answer.join('\n');
}

console.log(solution(input));