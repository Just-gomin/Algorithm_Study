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

  const yes = "yes";
  const no = "no";

  const n = +input[0];
  const edges = input.slice(1, n);
  const queries = input.slice(n + 1);

  const adjeacencyList = [...Array(n + 1)].fill(0);

  for (let edge of edges) {
    let a = +(edge.split(' ')[0]);
    let b = +(edge.split(' ')[1]);

    adjeacencyList[a]++;
    adjeacencyList[b]++;
  }

  for (let query of queries) {
    let t = +(query.split(' ')[0]);
    let k = +(query.split(' ')[1]);

    if (t === 1) {
      answer.push(adjeacencyList[k] !== 1 ? yes : no);
    } else if (t === 2) {
      answer.push(yes);
    } else {
      console.log("질의 오류 t가 1이나 2가 아닙니다.");
    }
  }


  return answer.join("\n");
}

console.log(solution(input));
