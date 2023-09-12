/*
  - 문제 Link : https://www.acmicpc.net/problem/21921

  # Solutions
  - 첫째 줄에 N와 X
  - 둘째 줄에는 블로그 시작 1일차부터 N일차까지 하루 방문자 수
  - 블로그를 시작하고 지난 일수 N
  - 가장 많은 방문자수 조회 기간 X
  - 1 <= X <= N <= 250000
  - 0 <= 방문자 수 <= 8000

  - 최대 방문자 수를 저장하고 있는 변수 max 선언
  - 방문자 수와 기간 수를 저장할 변수 history 선언
  - 순회를 진행하며, 현재 기간의 누적 방문자 수를 저장할 변수 curSum 선언
  - 0 ~ i ~ N-X 순회
    - curSum에서 i번째 수를 빼고 i+X 번째 수를 더해, i+1 ~ i+X 기간의 누적 방문자 수를 구한다.
    - 현재까지의 최대 방문자 수와 비교한다. 크다면, max 값 갱신 및 history=1로 초기화. 같다면 history 1 증가. 작다면 패스.
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
  const [N, X] = input[0].split(" ").map(Number);
  const visitors = input[1].split(" ").map(Number);

  let max = visitors.slice(0, X).reduce((pre, cur, i, arr) => pre + cur, 0);
  let curSum = max;
  let history = 1;

  for (let i = 0; i < N - X; i++) {
    curSum = curSum - visitors[i] + visitors[i + X];
    if (curSum > max) {
      max = curSum;
      history = 1;
    } else if (curSum === max) {
      history += 1;
    }
  }

  return max === 0 ? "SAD" : `${max}\n${history}`;
}

console.log(solution(input));
