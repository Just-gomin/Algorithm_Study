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

  const GCD = (a, b) => {
    let [min, max] = a < b ? [a, b] : [b, a];

    if (min === 0) return max;

    return GCD(min, max % min);
  };

  const n = +(input[0]);
  const numbers = input[1].split(' ').map((v) => +v);

  let gcd = 1;

  if (n === 2) gcd = GCD(numbers[0], numbers[1]);
  else if (n === 3) gcd = GCD(numbers[0], GCD(numbers[1], numbers[2]));

  for (let i = 1; i <= gcd; i++) {
    if (gcd % i === 0) answer.push(i);
  }

  return answer.join('\n');
}

console.log(solution(input));
