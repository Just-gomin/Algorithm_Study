/*
  - 문제 Link : https://www.acmicpc.net/problem/9251

  - 참고: https://myjamong.tistory.com/317

  # Solutions
  - LCS(Longest Common Subsequence, 최장 공통 부분 수열)문제는 두 수열이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 문제이다.
  - 첫째 줄과 둘째 줄에 두 문자열이 주어진다.
  - 문자열은 알파벳 대문자로만 이루어져 있으며, 최대 1000글자로 이루어져 있다.

  - 첫 번째 문자열을 str1, 두 번째 문자열을 str2라하고 각각의 문자열 첫번째에 공백을 추가한다.
  - 길이가 str1.length 인 배열 dp를 생성한다.
  - str1.length 만큼 dp를 순회한다.
    - 길이가 str2.length이고, 0으로 채워진 배열을 추가한다.
  - 1 ~ i ~ str1.length만큼 순회를 진행한다.
    - 1 ~ j ~ str2.length를 순회한다.
      - 겹치는 문자열의 최대 길이 누적을 진행한다.
      => dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + str1[i] === str2[j] ? 1 : 0 을 수행한다.
  - dp[str1.length][str2.length]를 반환한다.
  => 위 방법으로 수행 시 str1[i]가 연달아 일치하는 문자로 빠지는 경우 정답 보다 그 값이 크게 나올 수 있다.

  - 첫 번째 문자열을 str1, 두 번째 문자열을 str2라하고 각각의 문자열 첫번째에 공백을 추가한다.
  - 길이가 str1.length 인 배열 dp를 생성한다.
  - str1.length 만큼 dp를 순회한다.
    - 길이가 str2.length이고, 0으로 채워진 배열을 추가한다.
  - 1 ~ i ~ str1.length만큼 순회를 진행한다.
    - 1 ~ j ~ str2.length를 순회한다.
      - 겹치는 문자열의 최대 길이 누적을 진행한다.
      - str1[i] === str2[j] : true => dp[i][j] = dp[i-1][j-1] + 1
      - str1[i] === str2[j] : false => dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      을 수행한다.
  - dp[str1.length][str2.length]를 반환한다.
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
  const str1 = ' ' + input[0];
  const str2 = ' ' + input[1];

  const dp = Array(str1.length);
  for (let i = 0; i < str1.length; i++) {
    dp[i] = Array(str2.length).fill(0);
  }

  for (let i = 1; i < str1.length; i++) {
    for (let j = 1; j < str2.length; j++) {
      dp[i][j] = str1[i] === str2[j] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[str1.length - 1][str2.length - 1];
}

console.log(solution(input));
