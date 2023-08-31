/*
  - 문제 Link : https://www.acmicpc.net/problem/15724

  # Solutions
  - 영토의 크기 N, M(1 ≤ N, M ≤ 1,024)
  - 1 <= 각 단위 구역 내에 살고 있는 사람 수 <= 100
  - 직사각형 범위의 개수 K(1 ≤ K ≤ 100,000)
  - 직사각형 범위 x1, y1, x2, y2 (x1 ≤ x2, y1 ≤ y2)

  1. 영토 및 거주자 수 정보 저장하는 이차원 배열 area
  2. 테스트 케이스의 개수가 10만개까지 가능하고 시간제한이 2초기 때문에, 
  동적 기획법으로 해결할 필요가 있다.
  3. area 생성시 왼쪽 부터 누계한 값을 현재 값으로 대체 한다.
  4. 주어진 testcase에서 x1 ~ x2까지 area를 순회
  5. 주어진 y1, y2를 이용해 area[y2] - area[y1 - 1]를 계산하면 해당 구간에 살고있는 사람들 수의 누계를 구할 수 있다.
  6. 누계를 answer에 담는다.
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

  const n = Number(input[0].split(' ')[0])

  const area = [];
  input
    .slice(1, n + 1)
    .forEach(element => {
      let line = [0];
      let accumulate = 0;

      element
        .split(' ')
        .forEach((v) => {
          line.push(accumulate += Number(v));
        });

      area.push(line);
    });

  input.slice(n + 2).forEach(test => {
    const [x1, y1, x2, y2] = test.split(' ').map((v) => Number(v));
    answer.push(
      area
        .slice(x1 - 1, x2)
        .reduce(
          (prev, line) => prev + (line[y2] - line[y1 - 1])
          , 0)
    );
  });

  return answer.join('\n');
}

console.log(solution(input));
