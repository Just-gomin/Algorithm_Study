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

const solution = (input) => {
  let answer = [];
  let testCase = 1;

  let parentMap = new Map(); // key로 자식 노드, value로 부모 노드 리스트를 갖는 Map
  let edgeNum = 0; // 간선의 개수
  let nodeSet = new Set(); // 노드 집합

  // 테스트 결과문 반환
  const resultString = (k, isTree) =>
    `Case ${k} is${isTree ? "" : " not"} a tree.`;

  // 각 테스트 케이스 마다 활용할 지표
  const initialize = () => {
    parentMap = new Map();
    edgeNum = 0;
    nodeSet = new Set();
  };

  for (let line of input) {
    let data = line.trim();

    if (data === "") {
      continue;
    }

    let pairs = line.split("  ");

    for (let pair of pairs) {
      let u = parseInt(pair.split(" ")[0]);
      let v = parseInt(pair.split(" ")[1]);

      if (u === 0 && v === 0) {
        let rootNum = 0; // 루트의 개수
        let isTree = true; // 트리인지 여부

        if (nodeSet.size !== 0) {
          for (let node of nodeSet) {
            rootNum += parentMap.has(node) ? 0 : 1;

            if (parentMap.has(node) && parentMap.get(node).length > 1) {
              isTree = false;
              break;
            }
          }

          if (rootNum != 1 || nodeSet.size - edgeNum != 1) {
            isTree = false;
          }
        }

        answer.push(resultString(testCase, isTree));

        testCase++;
        initialize();
        continue;
      }

      nodeSet.add(u);
      nodeSet.add(v);
      parentMap.set(v, parentMap.has(v) ? parentMap.get(v).push(u) : [u]);
      edgeNum++;
    }
  }

  return answer.join("\n");
};

console.log(solution(input));
