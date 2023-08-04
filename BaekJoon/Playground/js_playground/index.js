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

  let tree = {};
  let remains = [];

  const [n, pairs] = [parseInt(input[0]), input.slice(1)];

  const makeTree = (n1, n2) => {
    if (n1 === 1) tree[n2] = 1;
    else if (n2 === 1) tree[n1] = 1;
    else if (tree[n1]) tree[n2] = n1;
    else if (tree[n2]) tree[n1] = n2;
    else remains.push([n1, n2]);
  }

  for (let i = 0; i < n - 1; i++) {
    let n1 = parseInt(pairs[i].split(' ')[0]);
    let n2 = parseInt(pairs[i].split(' ')[1]);

    makeTree(n1, n2);
  }

  while (remains.length > 0) {
    const [n1, n2] = remains.shift();
    makeTree(n1, n2);
  }

  return Object.keys(tree)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((child) => `${tree[child]}`)
    .join('\n');
}

console.log(solution(input));