/*
  - 문제 Link : https://www.acmicpc.net/problem/12865

  - 참고: https://st-lab.tistory.com/141

  # Solutions
  - 물품의 수 N(1 ≤ N ≤ 100)
  - 버틸 수 있는 무게 K(1 ≤ K ≤ 100,000)
  - N개의 줄에 거쳐 각 물건의 무게 W(1 ≤ W ≤ 100,000)와 해당 물건의 가치 V(0 ≤ V ≤ 1,000)
  - 제한이 되는 것은 무게만, 물건의 수는 고려하지 않아도됨.

  - 물건의 정보 pairs 배열을 input으로 부터 생성.
  - 0 ~ K까지 K+1의 길이를 갖는 배열 basket 생성, 0으로 채움 (최대 가치 저장 배열)
  - 1 ~ w ~ K 순회
    - 현재의 최대 가치 maxValue를 basket[w-1]로 할당
    - 0 ~ i ~ N-1 순회
      - iw(item weight)과 iv(item value) 각각 pair[i][0], pair[i][1]
      - w >= iw 인경우, maxValue와 basket[w - iw] + iv 중 최대값을 maxValue로 할당
  - basket[k] 출력
  => 위 방법은 물건 중복 선택의 경우가 포함될 수 있다.

  - 물건의 정보 items 배열을 input으로 부터 생성.
  - 0 ~ N까지 N + 1의 길이를 갖는 배열 basket 생성. (최대 가치 저장 배열)
    - 0 ~ N 순회하며, 0 ~ K까지 K+1의 길이를 갖는 배열을 0으로 채워 할당
  - 1 ~ i ~ N 순회
    - iw(item weight)과 iv(item value) 각각 items[i][0], items[i][1]
    - 1 ~ w ~ K 순회
      - w < iw 인 경우, basket[i][w] = basket[i - 1][w]을 할당
      - w >= iw 인 경우, basket[i][w] = basket[i][w - iw] + iv 중 최대값을 maxValue로 할당
  - basket[n][k] 출력
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
  const [n, k] = input[0].split(' ').map(Number);
  const items = input.slice(1).map((v) => v.split(' ').map(Number));

  const basket = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    basket[i] = Array(k + 1).fill(0);
  }

  for (let i = 1; i <= n; i++) {
    const [iw, iv] = items[i - 1];

    for (let w = 1; w <= k; w++) {
      basket[i][w] = w < iw ? basket[i - 1][w] : Math.max(basket[i - 1][w], basket[i - 1][w - iw] + iv);
    }
  }

  return basket[n][k];
}

console.log(solution(input));
