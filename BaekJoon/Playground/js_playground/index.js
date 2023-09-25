// ------------------------------
// Input with File System
// ------------------------------

// Read Inputs (from. https://help.acmicpc.net/language/info [node.js & TypeScript])
const fs = require("fs");
const { exit } = require("process");

// 입력값 파일 경로 결정
// node 실행 시 환경변수 [RUNNING_ON]을 "local"라는 값을 부여하여 '백준 온라인' 과 '로컬' 환경 구분
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

// 입력 값
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

// ------------------------------
// Input with Read Line
// ------------------------------

// // Read Inputs (from. https://velog.io/@leenzy/readline-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const dfs = (N, V, graph) => {
  const answer = [];
  const visited = new Array(N + 1).fill(false);
  const stack = [V];

  while (stack.length !== 0) {
    const node = stack.pop();

    if (!visited[node]) {
      answer.push(node);
      visited[node] = true;
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