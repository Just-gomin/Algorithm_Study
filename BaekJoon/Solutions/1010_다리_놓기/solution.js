/*
  - 문제 Link : https://www.acmicpc.net/problem/1010

  #재귀 함수 이용 풀이 => 시간 초과
    1. 0 < n <= m < 30
    2. if(n < 1) return 0;
    3. if(n === 1) return m;
    4. if(n === m) return 1;
    5. f(n, m) => return numOfMethods;
    6. f: for(i: 0 ~ (m-n)) 진행하며 f(n-1, m - 1 - i) 누계

  # 동적 계획법 풀이
    1. 30 * 30 2차원 배열 생성 (n === 0 인 경우는 0으로 채움)
    2. 재귀 함수 진입 시 위 배열에 가지 수가 기록된 상태면 해당 값 반환
    3. 위의 재귀 함수 방법 이용해 가지수 구하기
    4. 가지 수 반환 전 배열에 기록
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
