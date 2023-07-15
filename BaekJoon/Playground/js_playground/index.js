// Read Inputs (from. https://help.acmicpc.net/language/info [node.js & TypeScript])
const fs = require("fs");
const { exit } = require("process");

// 입력값 파일 경로 결정
// node 실행 시 환경변수 [RUNNING_ON]을 "local"라는 값을 부여하여 '백준 온라인' 과 '로컬' 환경 구분
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

// 한줄 입력
// const input = fs.readFileSync(filePath).toString();

// 첫 번째 줄에는 입력 값의 길이, 두 번째 줄부터 실제 데이터
const [n, ...input] = fs.readFileSync(filePath).toString().split("\n");

var stack = [];
var answer = []; // console.log 는 시간을 많이 소모 하는 명령이기 때문에 정답을 모아놓았다가, 한번에 출력하기 위함

function stackMethod(command, value = 0) {
  switch (command) {
    case "push":
      stack.push(value);
      break;
    case "pop":
      if (stack.length === 0) {
        answer.push(-1);
      } else {
        var poppedVale = stack.pop(value);
        answer.push(poppedVale);
      }
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
      break;
  }
}

for (var key in input) {
  var curCommand = input[key];

  const [cmd, val] = curCommand.split(" ");

  stackMethod(cmd, val);
}

console.log(answer.join("\n"));
