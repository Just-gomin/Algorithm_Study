/*
  - 문제 Link : https://www.acmicpc.net/problem/2225

  # Solution
  - 0부터 N까지의 정수 K개를 더해서 그 합이 N이 되는 경우
  - 덧셈의 순서가 바뀐 경우는 다른 경우로 센다
  - 두 정수 N(1 ≤ N ≤ 200), K(1 ≤ K ≤ 200)
  - 답을 1,000,000,000으로 나눈 나머지를 출력

  - 길이가 N + 1 인 배열 dp 생성
  - 0 ~ N까지 순회 하며 dp에 길이가 K + 1이고 0으로 채워진 배열을 삽입
  - 1 ~ n ~ N 까지 순회
    - 1 ~ k ~ K 까지 순회
      - 누계를 구할 accumulate 선언
      - 1 ~ i ~ n 까지 순회
        - accumulate += dp[i][k-1] 진행 // 첫 번째자리에 n-1 부터 0까지 위치 할 수 있고 이 경우의 수를 누적
    - dp[n][k] = (1 + accumulate) % 1000000000 // 첫 번째 자리에 n 자기 자신이 오는 경우 1
  - dp[N][K] 출력
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
  const numerator = Math.pow(10, 9);
  const [N, K] = input[0].split(' ').map(Number);

  const dp = Array(N + 1);
  for (let i = 0; i <= N; i++) {
    dp[i] = Array(K + 1).fill(0);
  }

  for (let n = 1; n <= N; n++) {
    for (let k = 1; k <= K; k++) {
      let accumulate = 0;
      for (let i = 1; i <= n; i++) {
        accumulate += dp[i][k - 1];
      }
      dp[n][k] = (1 + accumulate) % numerator;
    }
  }

  return dp[N][K];
}

console.log(solution(input));
