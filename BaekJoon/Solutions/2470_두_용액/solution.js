/*
  - 문제 Link : https://www.acmicpc.net/problem/2470

  # Solution
  - 전체 용액의 수 N, N은 2 이상 100,000 이하
  - N개의 용액 특성값, 각 특성값은 -1,000,000,000 이상 1,000,000,000 이하
  - 특성값이 0에 가장 가까운 용액을 만들어내는 두 용액의 특성값을 출력
  - N개의 용액들의 특성값은 모두 다르고, 산성 용액만으로나 알칼리성 용액만으로 입력이 주어지는 경우도 있을 수 있다.

  - 0 ~ i ~ N-2 순회
    - i+1 ~ j ~ N-1 순회
      - values[i] + values[j]의 절대값이 이전 최소값 보다 작은 경우,
        - 최소값 values[i] + values[j]의 절대값으로 할당
        - values[i], values[j]을 answer로 변경
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

  const N = Number(input[0]);
  const values = input[1].split(" ").map(Number);
  let min = Infinity;

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      let sum = Math.abs(values[i] + values[j]);
      if (sum < min) {
        min = sum;
        answer = [values[i], values[j]];
      }
    }
  }

  return answer.join(" ");
}

console.log(solution(input));
