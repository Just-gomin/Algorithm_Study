// Read Inputs (from. https://help.acmicpc.net/language/info [node.js & TypeScript])
const fs = require("fs");

// 입력값 파일 경로 결정
// node 실행 시 환경변수 [RUNNING_ON]을 "my"라는 값을 부여하여 '백준 온라인' 과 '로컬' 환경 구분
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

// 한줄 입력
const input = fs.readFileSync(filePath).toString();

// 첫 번째 줄에는 입력 값의 길이, 두 번째 줄부터 실제 데이터
// const [n, input] = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log("hi");
