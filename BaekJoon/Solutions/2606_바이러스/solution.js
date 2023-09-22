/*
  - 문제 Link : https://www.acmicpc.net/problem/2606

  # Solution
  - 컴퓨터의 수는 100 이하인 양의 정수, 컴퓨터에는 1번 부터 차례대로 번호가 매겨진다.
  - 네트워크를 통해 웜 바이러스 전파.
  - 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수 구하기

  - 주어진 그래프 데이터를 인접 리스트 형태로 저장한다.
  - 1번 부터 너비 우선 탐색을 진행해, 바이러스에 걸리게 되는 컴퓨터의 수를 센다.
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
  let answer = 0;

  const N = Number(input[0]);

  const network = [];
  for (let i = 0; i <= N; i++) network.push([]);

  for (let i = 2; i < input.length; i++) {
    const [p, q] = input[i].split(' ').map(Number);
    network[p].push(q);
    network[q].push(p);
  }

  const queue = [];
  for (const com of network[1]) {
    queue.push(com);
  }

  const visited = new Array(N + 1).fill(false);
  visited[0] = true, visited[1] = true;

  while (queue.length !== 0) {
    const com = queue.shift();
    if (!visited[com]) {
      visited[com] = true;
      answer += 1;
      for (const connectedCom of network[com]) {
        if (!visited[connectedCom]) queue.push(connectedCom);
      }
    }
  }

  return answer;
}

console.log(solution(input));
