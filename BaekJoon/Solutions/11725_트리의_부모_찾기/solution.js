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

  let tree = [... new Array(n + 1)].map(() => []); // 인접 리스트 트리
  let searchCheck = new Array(n + 1).fill(false); // BFS를 위한 탐색 여부 확인 배열
  let queue = [1]; // BFS를 수행하는 Queue

  let answer = new Array(n + 1).fill(NaN); // 노드의 부모를 기록하기 위한 배열

  const makeTree = (n1, n2) => {
    tree[n1].push(n2);
    tree[n2].push(n1);
  }

  // 인접 리스트 트리 기록
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