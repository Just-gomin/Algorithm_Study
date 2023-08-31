/*
  - 문제 Link : https://www.acmicpc.net/problem/15724

  # Solutions
  - 영토의 크기 N, M(1 ≤ N, M ≤ 1,024)
  - 1 <= 각 단위 구역 내에 살고 있는 사람 수 <= 100
  - 직사각형 범위의 개수 K(1 ≤ K ≤ 100,000)
  - 직사각형 범위 x1, y1, x2, y2 (x1 ≤ x2, y1 ≤ y2)

  1. 영토 및 거주자 수 정보 저장하는 이차원 배열
  2. 테스트 케이스의 개수가 10만개까지 가능하고 시간제한이 2초기 때문에, 
  동적 기획법으로 해결할 필요가 있다. => 시작점이 항상 달라지는데... 흠...
  3. 테스트 케이스 별로 x1 ~ x2까지 splice 하고
  4. reduce를 수행하는데
  5. 각 행마다 y1 ~ y2까지 splice 한 배열의
  6. reduce를 더한다.
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

  const [n, m] = input[0].split(' ').map((v) => Number(v));

  const area = [];
  input
    .slice(1, n + 1)
    .forEach(element => {
      area.push(
        element
          .split(' ')
          .map((v) => Number(v))
      );
    });

  const k = Number(input[n + 1]);

  input.slice(n + 2).forEach(element => {
    const [x1, y1, x2, y2] = element.split(' ').map((v) => Number(v));

    answer.push(
      area
        .slice(x1 - 1, x2)
        .reduce((prev, cur) => {
          return prev + cur.slice(y1 - 1, y2).reduce((prev, cur) => prev + cur, 0);
        }, 0)
    );
  });

  return answer;
}

console.log(solution(input));
