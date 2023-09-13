/*
  - 문제 Link : https://www.acmicpc.net/problem/20922

  # Solution
  - 수열의 길이 N, 1 <= N <= 200000
  - 같은 원소가 K개 이하로 들어 있는 최장 연속 부분 수열의 길이, 1 <= K <= 100
  - 1 <= 원소 <= 100000

  - 원소의 등장 횟수를 세기 위한 cnt 배열 선언
  - 부분수열의 시작점과 끝점을 나타내는 변수 start,end 선언
  - 최장 부분 수열의 길이를 저장하는 변수 answer 선언
  - end를 1씩 증가 시키며 순회
    - end가 가리키는 원소의 등장 횟수 1증가
    - 해당 원소의 등장 횟수가 K를 초과하는 경우,
      - answer과 end - start를 비교해 answer 갱신
      - start를 1씩 증가시키며, start가 가리키는 원소들의 등장 횟수 1차감
    
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
    cnt[serial[end]] += 1;

    if (cnt[serial[end]] > K) {
      if (answer < end - start) answer = end - start;

      while (cnt[serial[end]] > K) cnt[serial[start++]] -= 1;
    }

    end += 1;
  }

  if (answer === 0) answer = N;
  return answer;
}

console.log(solution(input));
