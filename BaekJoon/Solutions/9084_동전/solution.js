/*
  - 문제 Link : https://www.acmicpc.net/problem/9084

  # Solutions
  - 테스트 케이스의 개수 T(1 ≤ T ≤ 10)
  - 첫 번째 줄에는 동전의 가지 수 N(1 ≤ N ≤ 20)
  - 두 번째 줄에는 N가지 동전의 각 금액이 오름차순으로 정렬
  - 세 번째 줄에는 주어진 N가지 동전으로 만들어야 할 금액 M(1 ≤ M ≤ 10000)
  - 편의를 위해 방법의 수는 2^31 - 1 보다 작고, 같은 동전이 여러 번 주어지는 경우는 없다.
  
  - 길이가 M + 1인 일차원 배열 basket생성(0으로 채워진 배열, 0번째는 1)
  - 동전들 coins 배열을 순회 하며, 1~k~M 원에 대해 basket[k] += basket[k - coins[i]]를 진행해
    해당 금액을 만들 수 있는 경우의 수를 누적 시킨다.
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

  const t = Number(input[0]);
  const testCases = input.slice(1);

  const getNumOfWays = (amount, coins) => {
    let basket = Array(amount + 1).fill(0);
    basket[0] = 1;

    for (const coin of coins) {
      for (let k = coin; k <= amount; k++) {
        basket[k] += basket[k - coin];
      }
    }

    return basket[amount];
  }

  for (let i = 0; i < t; i++) {
    const startIndex = 3 * i;
    const coins = testCases[startIndex + 1].split(' ').map((v) => Number(v));
    const m = Number(testCases[startIndex + 2]);
    answer.push(getNumOfWays(m, coins));
  }

  return answer.join('\n');
}

console.log(solution(input));
