/*
  - 문제 Link : https://www.acmicpc.net/problem/1325

  - 참고: https://velog.io/@jooyong-boo/javascript-%EB%B0%B1%EC%A4%80-1325%EB%B2%88-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%ED%95%B4%ED%82%B9-qux42o4r
  - 내가 푼것과 다르지 않은데, 왜 이분 코드는 통과했을까...?

  # Solution
  - 이 회사는 N개의 컴퓨터로 이루어져 있다
  - 이 회사의 컴퓨터는 신뢰하는 관계와, 신뢰하지 않는 관계로 이루어져 있는데, A가 B를 신뢰하는 경우에는 B를 해킹하면, A도 해킹할 수 있다
  - 이 회사의 컴퓨터의 신뢰하는 관계가 주어졌을 때, 한 번에 가장 많은 컴퓨터를 해킹할 수 있는 컴퓨터의 번호를 출력하는 프로그램을 작성
  - 입력) 첫째 줄에, N과 M이 들어온다. N은 10,000보다 작거나 같은 자연수, M은 100,000보다 작거나 같은 자연수
  - 입력) 둘째 줄부터 M개의 줄에 신뢰하는 관계가 A B와 같은 형식으로 들어오며, "A가 B를 신뢰한다"를 의미한다
  - 입력) 컴퓨터는 1번부터 N번까지 번호가 하나씩 매겨져 있다
  - 출력) 첫째 줄에, 김지민이 한 번에 가장 많은 컴퓨터를 해킹할 수 있는 컴퓨터의 번호를 오름차순으로 출력한다.

  - 인접 리스트 그래프로 주어진 신뢰 관계를 저장한다.
    - 양방향이 아니기 때문에 단방향으로의 관계만 저장한다.
  - 1번부터 N번까지 순회하며, DFS를 진행한다.
  - DFS를 진행하며, 각 노드의 최대 탐색 횟수를 저장한다.
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

  const [N, M] = input[0].split(' ').map(Number);

  const graph = new Array(N + 1).fill(0).map(() => new Array());
  for (let i = 1; i <= M; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    graph[B].push(A);
  }

  const dfs = (start) => {
    const visited = new Array(N + 1).fill(false);
    const stack = [start];
    let cnt = 0;

    while (stack.length !== 0) {
      const node = stack.pop();
      visited[node] = true;
      cnt++;
      for (const child of graph[node]) {
        if (!visited[child]) stack.push(child);
      }
    }

    return cnt;
  }

  let maxHacked = 0;
  for (let i = 1; i <= N; i++) {
    let hacked = dfs(i);
    if (maxHacked < hacked) {
      maxHacked = hacked;
      answer = [i];
    } else if (maxHacked === hacked) answer.push(i);
  }

  return answer.join(' ');
}

console.log(solution(input));
