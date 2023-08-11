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
  let answer = new Set([1]);

  const numbers = input[1].split(' ').map((v) => +v);

  const min = Math.min(...numbers);

  let divisorList = [1];
  let commonDivisorList = [];

  let divider = 2;
  const limit = min / 2;

  while (divider <= limit) {
    if (min % divider === 0) divisorList.push(divider);
    divider++;
  }

  for (let divisor of divisorList) {
    let dividable = true;

    for (let denominator of numbers.slice(1)) {
      if (denominator % divisor !== 0) {
        dividable = false;
        break;
      }
    }

    if (dividable) commonDivisorList.push(divisor);
  }

  for (let commonDivisor of commonDivisorList) {
    if (commonDivisor === 1) continue;

    answer.add(commonDivisor);

    let multi = 2;

    while (commonDivisor * multi <= min) {
      let isCommonDivisor = true;

      for (let denominator of numbers) {
        if (denominator % (commonDivisor * multi) !== 0) {
          isCommonDivisor = false;
          break;
        }
      }

      if (isCommonDivisor) answer.add(commonDivisor * multi);
      multi++;
    }
  }


  return [...answer.values()].sort((a, b) => (+a) - (+b)).join('\n');
}

console.log(solution(input));