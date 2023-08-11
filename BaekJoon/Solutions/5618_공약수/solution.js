/*
  - 문제 Link : https://www.acmicpc.net/problem/5618

  - 약수: 소수의 배수
  - 공약수: 각 수의 약수 중 공통되는 수
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

  const GCD = (a, b) => {
    let [min, max] = a < b ? [a, b] : [b, a];

    if (min === 0) return max;

    return GCD(min, max % min);
  };

  const n = +(input[0]);
  const numbers = input[1].split(' ').map((v) => +v);

  let gcd = 1;

  if (n === 2) gcd = GCD(numbers[0], numbers[1]);
  else if (n === 3) gcd = GCD(numbers[0], GCD(numbers[1], numbers[2]));

  for (let i = 1; i <= gcd; i++) {
    if (gcd % i === 0) answer.push(i);
  }

  return answer.join('\n');
}

console.log(solution(input));