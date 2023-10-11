/*
  - 문제 Link : https://www.acmicpc.net/problem/2231

  - 단서
  1. 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합
  2. 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자
    - 예를 들어, 245의 분해합은 256(=245+2+4+5). 따라서 245는 256의 생성자
  3. 어떤 자연수의 경우에는 생성자가 없을 수도 있다, 반대로 생성자가 여러 개인 자연수도 있을 수 있다.
  4. 입력: 첫째 줄에 자연수 N(1 ≤ N ≤ 1,000,000)

  - 해결
  1. N의 각 자리수는 최대 9이다. 따라서 탐색 범위를 N-(N의 자리수 *9) ~ N으로 지정한다.
  2. 탐색 범위를 순회한다.
  3. 해당 회차 숫자로 분해합 진행
  4. 분해합이 N과 일치한다면 순회 중단 후 해당 회차 숫자 반환
*/

const fs = require("fs");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

function solution(input) {
    let answer = 0;

    const N = Number(input[0]);
    let provider = N - input[0].length * 9;
    while (provider <= N) {
        let sum = provider + provider.toString().split('').map(Number).reduce((pre, cur) => pre + cur);
        if (sum === N) return provider;
        provider += 1;
    }

    return answer;
}

console.log(solution(input));
