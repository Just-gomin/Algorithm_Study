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

function solution(input) {
  let answer = [];

  const [N, M] = input[0].split(' ').map(Number);

  const dfs = (start, graph) => {
    const visited = new Array(N + 1).fill(false);
    const stack = [start];

    while (stack.length !== 0) {
      const node = stack.pop();
      visited[node] = true;
      for (const child of graph[node]) {
        if (!visited[child]) stack.push(child);
      }
    }

    return visited.filter((value) => value).length;
  }

  const graph = new Array(N + 1).fill(0).map(() => new Array());
  for (let i = 1; i <= M; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    graph[B].push(A);
  }

  let maxHacked = 0;
  for (let i = 1; i <= N; i++) {
    let hacked = dfs(i, graph);
    if (maxHacked < hacked) {
      maxHacked = hacked;
      answer = [i];
    } else if (maxHacked === hacked) answer.push(i);
  }

  return answer.join(' ');
}

console.log(solution(input));