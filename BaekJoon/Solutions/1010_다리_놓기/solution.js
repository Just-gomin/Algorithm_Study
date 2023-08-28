/*
  - 문제 Link : https://www.acmicpc.net/problem/1010

  # Solution
  1. 0 < n <= m < 30
  2. if(n < 1) return 0;
  3. if(n === 1) return m;
  4. if(n === m) return 1;
  5. f(n, m) => return numOfMethods;
  6. f: for(i: 0 ~ (m-n)) 진행하며 f(n-1, m - 1 - i) 누계
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

// 재귀 함수 이용 풀이 => 시간 초과
function solution(input) {
  let answer = [];

  const [numOfCases, cases] = [Number(input[0]), input.splice(1)];

  const methodMap = new Map();

  const buildBridge = (n, m) => {
    if (n < 1) return 0;
    if (n === 1) return m;
    if (n === m) return 1;

    let numOfMethods = 0;
    for (let i = 0; i <= m - n; i++) {
      numOfMethods += buildBridge(n - 1, m - 1 - i);
    }

    return numOfMethods;
  };

  for (let i = 0; i < numOfCases; i++) {
    const [n, m] = cases[i].split(" ").map((v) => Number(v));
    answer.push(buildBridge(n, m));
  }

  return answer.join("\n");
}

console.log(solution(input));
