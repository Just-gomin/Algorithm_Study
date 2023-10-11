/*
  - 문제 Link : https://www.acmicpc.net/problem/19532

  - 단서
  1. 연립 방정식 ax + by = c & dx + ey = f
  2. 정수 a, b, c, d, e, f (-999 <= a,b,c,d,e,f <= 999)
  3. 문제에서 언급한 방정식을 만족하는 (x,y)가 유일하게 존재하고, 이 때 x와 y가 각각 -999 이상 999 이하의 정수인 경우만 입력으로 주어짐

  - 해결
  1. 연립 방정식의 해를 구하면 x = (ce - bf)/(ae - bd), y = (cd - af)/(bd - ae) 가 된다
  2. 입력된 a, b, c, d, e, f를 대입해 x, y를 구한다.
*/

const fs = require("fs");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let answer = [];
  const [a, b, c, d, e, f] = input[0].split(' ').map(Number);
  answer.push((c * e - b * f) / (a * e - b * d)); // x
  answer.push((c * d - a * f) / (b * d - a * e)); // y
  return answer.join(' ');
}

console.log(solution(input));

function bruteforceSolution(input) {
  const [a, b, c, d, e, f] = input[0].split(' ').map(Number);

  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if ((a * x + b * y === c) && (d * x + e * y === f)) return `${x} ${y}`;
    }
  }
}

console.log(bruteforceSolution(input));