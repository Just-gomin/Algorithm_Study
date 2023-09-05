/*
  - 문제 Link : https://www.acmicpc.net/problem/9084

  # Solutions
  - 테스트 케이스의 개수 T(1 ≤ T ≤ 10)
  - 첫 번째 줄에는 동전의 가지 수 N(1 ≤ N ≤ 20)
  - 두 번째 줄에는 N가지 동전의 각 금액이 오름차순으로 정렬
  - 세 번째 줄에는 주어진 N가지 동전으로 만들어야 할 금액 M(1 ≤ M ≤ 10000)
  - 편의를 위해 방법의 수는 2^31 - 1 보다 작고, 같은 동전이 여러 번 주어지는 경우는 없다.
  
  - 값을 저장하는 문제가 아닌 점화식을 이용한 문제로 판단
  - 금액과 동전 목록을 입력 받아 재귀 호출되는 함수 작성
  - 가장 금액이 큰 동전으로 남은 금액을 나누었을 때 몫을 구하여, 그걸 하나씩 줄여가며 경우의 수를 찾는다.
  - 입력 받은 동전 목록의 길이가 1이고, 해당 동전으로 남은 금액이 나누어 떨어진다면 1반환
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

  const getNumOfWays = (amount, coins = []) => {
    if (amount === 0 || coins.length === 0) return 0;
    if (coins.length === 1) {
      return amount % coins[0] !== 0 ? 0 : 1;
    }

    const maxCoin = coins.at(-1);
    let maxCoinN = Math.floor(amount / maxCoin);
    let result = amount % maxCoin === 0 ? 1 : 0;

    while (--maxCoinN >= 0) {
      result += getNumOfWays(amount - maxCoin * maxCoinN, coins.slice(0, -1));
    }

    return result;
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
