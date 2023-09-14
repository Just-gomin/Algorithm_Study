/*
  - 문제 Link : https://www.acmicpc.net/problem/2470

  # Solution
  - 전체 용액의 수 N, N은 2 이상 100,000 이하
  - N개의 용액 특성값, 각 특성값은 -1,000,000,000 이상 1,000,000,000 이하
  - 특성값이 0에 가장 가까운 용액을 만들어내는 두 용액의 특성값을 출력
  - N개의 용액들의 특성값은 모두 다르고, 산성 용액만으로나 알칼리성 용액만으로 입력이 주어지는 경우도 있을 수 있다.

  # 시간초과
  - 0 ~ i ~ N-2 순회
    - i+1 ~ j ~ N-1 순회
      - values[i] + values[j]의 절대값이 이전 최소값 보다 작은 경우,
        - 최소값 values[i] + values[j]의 절대값으로 할당
        - values[i], values[j]을 answer로 변경
  
  - 특성값을 오름차순 정렬시킨다.
  - 특성값의 인덱스를 가리키는 start=0와 end=N-1 변수 선언
  - 최소값 저장 변수 min 선언
  - 반복문 진행
    - start와 end가 가리키는 수의 합을 구한다.
    - 합의 절대값이 min보다 작으면, 최소값 갱신 및 answer로 할당
    - 합이 0보다 작은 경우, 음수가 작아져야하기 때문에 start 1 증가
    - 합이 0인경우, 반복문 중단
    - 합이 0보다 큰 경우, 양수가 작아져야하기 때문에 end 1 감소
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
  const values = input[1].split(" ").map(Number).sort((a, b) => a - b);

  let start = 0, end = N - 1;
  let min = Infinity;

  while (start < end) {
    const sum = values[start] + values[end];
    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      answer = [values[start], values[end]];
    }

    if (sum < 0) start += 1;
    if (sum === 0) break;
    if (sum > 0) end -= 1;
  }

  return answer.join(" ");
}

console.log(solution(input));
