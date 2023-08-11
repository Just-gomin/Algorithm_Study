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
  let answer = new Set([1]);

  const numbers = input[1].split(' ').map((v) => +v);

  const min = Math.min(...numbers);

  let divisorList = [1];
  let commonDivisorList = [];

  let divider = 2;
  const limit = min / 2;

  while (divider <= limit) {
    if (min % divider === 0) divisorList.push(divider);
    divider++;
  }

  for (let divisor of divisorList) {
    let dividable = true;

    for (let denominator of numbers.slice(1)) {
      if (denominator % divisor !== 0) {
        dividable = false;
        break;
      }
    }

    if (dividable) commonDivisorList.push(divisor);
  }

  for (let commonDivisor of commonDivisorList) {
    if (commonDivisor === 1) continue;

    answer.add(commonDivisor);

    let multi = 2;

    while (commonDivisor * multi <= min) {
      let isCommonDivisor = true;

      for (let denominator of numbers) {
        if (denominator % (commonDivisor * multi) !== 0) {
          isCommonDivisor = false;
          break;
        }
      }

      if (isCommonDivisor) answer.add(commonDivisor * multi);
      multi++;
    }
  }


  return [...answer.values()].sort((a, b) => (+a) - (+b)).join('\n');
}

console.log(solution(input));
