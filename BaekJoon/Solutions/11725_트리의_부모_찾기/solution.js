/*
  - 문제 Link : https://www.acmicpc.net/problem/11725
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

  let tree = new Array(n + 1); // 인접 행렬 트리
  let searchCheck = new Array(n + 1); // BFS를 위한 탐색 여부 확인 배열
  let queue = [1]; // BFS를 수행하는 Queue

  let answer = new Array(n + 1).fill(NaN); // 노드의 부모를 기록하기 위한 배열

  for (let i = 0; i <= n + 1; i++) {
    tree[i] = new Array(n + 1).fill(false);
    searchCheck[i] = new Array(n + 1).fill(false);
  }

  const makeTree = (n1, n2) => {
    tree[n1][n2] = true;
    tree[n2][n1] = true;
  }

  // 인접 행렬 트리 기록
  for (let i = 0; i < n - 1; i++) {
    let n1 = parseInt(pairs[i].split(' ')[0]);
    let n2 = parseInt(pairs[i].split(' ')[1]);

    makeTree(n1, n2);
  }

  // BFS 진행 및 부모노드 기록
  while (queue.length > 0) {
    let curNode = queue.shift();

    for (let i = 2; i <= n; i++) {
      // 두 노드가 연결됐고, answer에 기록이 되지 않은 경우 수행
      if (tree[curNode][i] && isNaN(answer[i])) {
        answer[i] = curNode;

        if (!searchCheck[curNode][i]) {
          queue.push(i);
        }

        searchCheck[curNode][i] = true;
        searchCheck[i][curNode] = true;
      }
    }
  }

  return answer.slice(2).join('\n');
}

console.log(solution(input));