/*
  - 문제 Link : https://www.acmicpc.net/problem/18312

  - 단서
  1. 정수 N과 K가 입력되었을 때 00시 00분 00초부터 N시 59분 59초까지의 모든 시각 중에서 K가 하나라도 포함되는 모든 시각을 세는 프로그램을 작성
  2. 시각을 셀 때는 디지털 시계를 기준으로, 초 단위로만 시각을 구분한다

  - 해결
  1. 시: 0~N까지 순회, 분&초: 0~59까지 순회 진행
  2. 각 순회 변수들을 문자열화해, K가 포함되어 있는지 확인 및 횟수 기록
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

  const [N, K] = [+input[0].split(' ')[0], input[0].split(' ')[1]];

  const make2DigitString = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
  }

  for (let hour = 0; hour <= N; hour++) {
    for (let min = 0; min < 60; min++) {
      for (let sec = 0; sec < 60; sec++) {
        if (make2DigitString(hour).includes(K)
          || make2DigitString(min).includes(K)
          || make2DigitString(sec).includes(K)) answer += 1;
      }
    }
  }

  return answer;
}

console.log(solution(input));
