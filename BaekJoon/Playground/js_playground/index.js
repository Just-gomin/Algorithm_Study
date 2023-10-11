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
  let answer = [];
  const [a, b, c, d, e, f] = input[0].split(' ').map(Number);
  answer.push((c * e - b * f) / (a * e - b * d)); // x
  answer.push((c * d - a * f) / (b * d - a * e)); // y
  return answer.join(' ');
}

console.log(solution(input));

function bruteforceSolution(input) {
  const [a, b, c, d, e, f] = input[0].split(' ').map(Number);

  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if ((a * x + b * y === c) && (d * x + e * y === f)) return `${x} ${y}`;
    }
  }
}

console.log(bruteforceSolution(input));