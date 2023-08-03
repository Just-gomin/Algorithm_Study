/*
  - 문제 Link : https://www.acmicpc.net/problem/6416
  - 풀이 참고 Link : https://velog.io/@pss407/%EB%B0%B1%EC%A4%806416-%ED%8A%B8%EB%A6%AC%EC%9D%B8%EA%B0%80
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

        // 노드가 존재하지 않는 트리도 트리이며, 노드가 존재할 때는 아래의 로직에서 판단
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
