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

  const t = Number(input[0]);
  const testCases = input.slice(1);

  const getNumOfWays = (amount, coins = []) => {
    if (amount === 0 || coins.length === 0) return 0;
    if (coins.length === 1) {
      return amount % coins[0] !== 0 ? 0 : 1;
    }

    const maxCoin = coins.at(-1);
    let maxCoinN = Math.floor(amount / maxCoin);
    let result = amount % maxCoin === 0 ? 1 : 0;

    while (--maxCoinN >= 0) {
      result += getNumOfWays(amount - maxCoin * maxCoinN, coins.slice(0, -1));
    }

    return result;
  }

  for (let i = 0; i < t; i++) {
    const startIndex = 3 * i;
    const coins = testCases[startIndex + 1].split(' ').map((v) => Number(v));
    const m = Number(testCases[startIndex + 2]);
    answer.push(getNumOfWays(m, coins));
  }

  return answer.join('\n');
}

console.log(solution(input));