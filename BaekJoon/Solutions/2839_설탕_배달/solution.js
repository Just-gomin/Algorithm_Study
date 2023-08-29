/*
  - 문제 Link : https://www.acmicpc.net/problem/2839

  # Solution
  - 설탕 무게 N, 3 <= N <= 5000
  - 3kg 봉투와 5kg 봉투, 최소 개수의 봉투를 사용한다.
  - N을 5로 나눈 몫을 구한다.
  - 나머지가 3으로 나뉠 때까지 5kg 봉투 개수를 하나씩 줄여나간다.
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
    let answer = -1;

    let n = Number(input[0]);

    let numOf5 = Math.floor(n / 5) + 1;

    while (--numOf5 > -1) {
        if ((n - 5 * numOf5) % 3 === 0) return numOf5 + ((n - 5 * numOf5) / 3);
    }

    return answer;
}

console.log(solution(input));
