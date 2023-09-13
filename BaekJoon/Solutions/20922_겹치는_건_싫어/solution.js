/*
  - 문제 Link : https://www.acmicpc.net/problem/20922

  # Solution
  - 수열의 길이 N, 1 <= N <= 200000
  - 같은 원소가 K개 이하로 들어 있는 최장 연속 부분 수열의 길이, 1 <= K <= 100
  - 1 <= 원소 <= 100000

  - 원소의 등장 횟수를 세기 위한 cnt 배열 선언
  - 부분수열의 시작점과 끝점을 나타내는 변수 start,end 선언
  - 최장 부분 수열의 길이를 저장하는 변수 answer 선언
  - 원소의 등장횟수가 K 이하가 되도록 유지하기 위해 start와 end를 이용해 순회 진행
  - 반복문 진행
    - cnt[serial[end]] < K
      - cnt[serial[end]] 1 증가
      - end 1 증가
      - answer 와 end - start 비교하여 갱신
    - cnt[serial[end]] === K
      - cnt[serial[start]] 1 감소
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
  const [N, K] = input[0].split(" ").map(Number);
  const serial = input[1].split(" ").map(Number);
  const cnt = Array(100001).fill(0);

  let start = 0, end = 0;
  let answer = 0;

  while (end < N && start <= end) {
    if (cnt[serial[end]] < K) {
      cnt[serial[end++]] += 1;
      answer = Math.max(answer, end - start);
    } else if (cnt[serial[end]] === K) {
      cnt[serial[start++]] -= 1;
    }
  }

  return answer;
}

console.log(solution(input));
