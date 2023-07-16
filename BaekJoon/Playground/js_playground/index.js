// Read Inputs (from. https://help.acmicpc.net/language/info [node.js & TypeScript])
const fs = require("fs");
const { exit } = require("process");

// 입력값 파일 경로 결정
// node 실행 시 환경변수 [RUNNING_ON]을 "local"라는 값을 부여하여 '백준 온라인' 과 '로컬' 환경 구분
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

// 입력 값
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(data) {
  /*
    Code Body
  */
  let parenthesis = data.split("");

  if (parenthesis.length % 2 == 1) {
    return "NO";
  }

  let stack = [];
  let remain = [];

  parenthesis.map((item) => {
    if (item == "(") {
      stack.push(item);
    } else if (
      item == ")" &&
      stack.length != 0 &&
      stack[stack.length - 1] == "("
    ) {
      stack.pop();
    } else {
      remain.push(item);
    }
  });

  if (stack.length == 0 && remain.length == 0) {
    return "YES";
  } else {
    return "NO";
  }
}

function main(input) {
  const [n, ...data] = input;

  let answer = []; // console.log 는 시간을 많이 소모 하는 명령이기 때문에 정답을 모아놓았다가, 한번에 출력하기 위함

  for (let i = 0; i < n; i++) {
    answer.push(solution(data[i]));
  }
  console.log(answer.join("\n"));
}

main(input);
