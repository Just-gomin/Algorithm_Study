/*
  - 문제 Link : https://www.acmicpc.net/problem/11725

  # Solution
  - 루트 없는 트리가 주어진다.
  - 트리의 루트를 1이라고 정했을 때, 각 노드의 부모를 구하는 프로그램을 작성
  - 첫째 줄에 노드의 개수 N (2 ≤ N ≤ 100,000)
  - 둘째 줄부터 N-1개의 줄에 트리 상에서 연결된 두 정점
  - 첫째 줄부터 N-1개의 줄에 각 노드의 부모 노드 번호를 2번 노드부터 순서대로 출력한다.

  - 주어진 노드를 인접 리스트 그래프로 저장한다.
  - 시작은 1번 노드로 고정시킨다.
  - BFS를 이용해 부모 노드를 기록해 간다.
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

function solution(input = []) {

  const [n, pairs] = [parseInt(input[0]), input.slice(1)];

  let tree = [...new Array(n + 1)].map(() => []); // 인접 리스트 트리
  let visited = new Array(n + 1).fill(false); // BFS를 위한 탐색 여부 확인 배열
  let queue = [1]; // BFS를 수행하는 Queue

  let answer = new Array(n + 1).fill(NaN); // 노드의 부모를 기록하기 위한 배열

  // 인접 리스트 트리 기록
  for (const pair of pairs) {
    const [from, to] = pair.split(' ').map(Number);

    tree[from].push(to);
    tree[to].push(from);
  }

  // BFS 진행 및 부모노드 기록
  while (queue.length > 0) {
    let curNode = queue.shift();

    for (const child of tree[curNode]) {
      if (!visited[child]) {
        visited[child] = true;
        answer[child] = curNode;
        queue.push(child);
      }
    }
  }

  return answer.slice(2).join('\n');
}

console.log(solution(input));