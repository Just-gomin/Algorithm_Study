// Read Inputs (from. https://help.acmicpc.net/language/info [node.js & TypeScript])
const fs = require("fs");
const { exit } = require("process");

// 입력값 파일 경로 결정
// node 실행 시 환경변수 [RUNNING_ON]을 "local"라는 값을 부여하여 '백준 온라인' 과 '로컬' 환경 구분
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

// 입력 값
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(n, m, inputs) {
  let answer = [];

  let indexMap = {};
  let nameMap = {};

  for (let i = 0; i < n; i++) {
    indexMap[i + 1] = inputs[i];
    nameMap[inputs[i]] = i + 1;
  }

  for (let j = 0; j < m; j++) {
    let question = inputs[n + j];

    if (isNaN(question)) {
      answer.push(nameMap[question]);
    } else {
      answer.push(indexMap[parseInt(question)]);
    }
  }

  return answer;
}

function main(input = []) {
  const [n, m] = input[0].split(" ");

  let answer = [];

  answer = solution(parseInt(n), parseInt(m), input.splice(1));

  console.log(answer.join("\n"));
}

main(input);
