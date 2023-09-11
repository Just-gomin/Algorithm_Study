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
  - 0 ~ i ~ N-X 순회
    - i ~ j ~ x, 방문자 수 누적합
    - max 값과 비교 후 history에 저장
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
  let max = 0;
  let history = 0;

  const [N, X] = input[0].split(" ").map(Number);
  const visitors = input[1].split(" ").map(Number);

  for (let i = 0; i <= N - X; i++) {
    let acc = visitors.slice(i, i + X).reduce((pre, cur, _, _) => pre + cur, 0);

    if (acc > max) {
      max = acc;
      history = 1;
    } else if (acc === max) {
      history += 1;
    }
  }

  return max === 0 ? "SAD" : `${max}\n${history}`;
}

console.log(solution(input));
