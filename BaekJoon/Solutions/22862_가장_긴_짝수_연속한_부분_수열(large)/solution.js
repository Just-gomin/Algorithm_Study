/*
  - 문제 Link : https://www.acmicpc.net/problem/22862

  # Solution
  - 수열 S의 길이 N, 1 <= N <= 1000000
  - 원소를 삭제할 수 있는 횟수 K, 1 <= K <= 100000
  - 수열의 원소, 1이상 1000000 이하

  - 최대 길이 저장 변수 answer =0 선언, 등장한 홀수의 수 저장 변수 cnt=0 선언
  - 수열의 두 인덱스를 가리킬 start와 end 변수 선언
  - end < N 및 start <= end 조건으로 순회 진행
    - cnt 가 K 이하인 경우
      - 수열의 end번째 수가 홀수인 경우, cnt 1 증가
      - 최장길이 갱신 max(answer, end - start + 1 - cnt)
      - end 1 증가
    - cnt가 K 초과인 경우
      - 수열의 start번째 수가 홀수인 경우, cnt 1 감소
      - start 1 증가
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
  let answer = 0;
  let cnt = 0;

  const [N, K] = input[0].split(" ").map(Number);
  const serial = input[1].split(" ").map(Number);

  let start = 0, end = 0;

  while (end < N && start <= end) {
    if (cnt <= K) {
      if (serial[end] % 2 === 1) cnt += 1;

      answer = Math.max(answer, end - start + 1 - cnt);
      end += 1;
    } else if (cnt > K) {
      if (serial[start] % 2 === 1) cnt -= 1;
      start += 1;
    }
  }

  return answer;
}

console.log(solution(input));
