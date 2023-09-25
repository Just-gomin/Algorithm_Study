/*
  - 문제 Link : https://www.acmicpc.net/problem/1260

  # Solution
  - 그래프를 DFS와 BFS로 탐색한 결과를 출력
  - 방문 가능한 정점이 여러개인 경우, 정점 번호가 작은 것을 먼저 방문.
  - 더 이상 방문할 수 있는 점이 없는 경우 종료.
  - 정점 번호는 1번 부터 N번까지
  - 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V
  - 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호
  - 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다
  - 입력으로 주어지는 간선은 양방향

  - 인접 행렬 그래프를 위해 배열을 생성하고, 양방향 그래프를 저장한다.
    - 길이가 N+1인 배열 생성
    - Set()으로 모두 채운다
    - 주어진 간선 정보에 등장하는 두 개의 노드에 대해 각각 서로를 추가한다.
    - Set()을 Array()로 바꾸며 오름차순 정렬시킨다
  - 주어진 간선 정보를 이용해 DFS와 BFS를 진행한다.
  - DFS는 스택 자료구조를 이용하고, BFS는 큐 자료구조를 이용한다.
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

const dfs = (N, V, graph) => {
  const answer = [];
  const visited = new Array(N + 1).fill(false);
  const stack = [V];

  while (stack.length !== 0) {
    const node = stack.pop();

    if (!visited[node]) {
      answer.push(node);
      visited[node] = true;

      // stack에서 번호가 낮은 순번대로 순회 하기 위해, 연결된 노드들 내림차순 정렬
      // stack은 맨 뒤에 노드 부터 탐색하니까!
      const children = [...graph[node]].sort((a, b) => b - a);
      for (const child of children) stack.push(child);
    }
  }

  return answer.join(' ');
}

const bfs = (N, V, graph) => {
  const answer = [];
  const visited = new Array(N + 1).fill(false);
  const queue = [V];

  while (queue.length !== 0) {
    const node = queue.shift();

    if (!visited[node]) {
      answer.push(node);
      visited[node] = true;

      // queue에서 번호가 낮은 순번대로 순회 하기 위해, 연결된 노드들 오름차순 정렬
      // queue은 맨 앞에 노드 부터 탐색하니까!
      const children = [...graph[node]].sort((a, b) => a - b);
      for (const child of children) queue.push(child);
    }
  }

  return answer.join(' ');
}

function solution(input) {
  let answer = [];

  const [N, M, V] = input[0].split(' ').map(Number);
  const graph = new Array(N + 1);

  for (let i = 0; i <= N; i++) {
    graph[i] = new Set();
  }

  // 양방향 그래프
  for (let i = 1; i <= M; i++) {
    const [from, to] = input[i].split(' ').map(Number);
    graph[from].add(to), graph[to].add(from);
  }

  answer.push(dfs(N, V, graph));
  answer.push(bfs(N, V, graph));

  return answer.join('\n');
}

console.log(solution(input));