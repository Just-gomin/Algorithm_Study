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

function solution(input = []) {

  const [n, pairs] = [parseInt(input[0]), input.slice(1)];

  let tree = [... new Array(n + 1)].map(() => []); // 인접 행렬 트리
  let searchCheck = new Array(n + 1).fill(false); // BFS를 위한 탐색 여부 확인 배열
  let queue = [1]; // BFS를 수행하는 Queue

  let answer = new Array(n + 1).fill(NaN); // 노드의 부모를 기록하기 위한 배열

  const makeTree = (n1, n2) => {
    tree[n1].push(n2);
    tree[n2].push(n1);
  }

  // 인접 행렬 트리 기록
  pairs.forEach((pair) => {
    let n1 = parseInt(pair.split(' ')[0]);
    let n2 = parseInt(pair.split(' ')[1]);

    makeTree(n1, n2);
  });

  // BFS 진행 및 부모노드 기록
  while (queue.length > 0) {
    let curNode = queue.shift();

    tree[curNode].map((child) => {
      if (!searchCheck[child]) {
        searchCheck[child] = true;
        answer[child] = curNode;
        queue.push(child);
      }
    });
  }

  return answer.slice(2).join('\n');
}

console.log(solution(input));