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

const left = 'left';
const right = 'right';

const preOrderSearch = (tree) => {
  let result = '';

  const innerFunction = (node) => {
    if (node !== '.') {
      result += node;
      innerFunction(tree.get(node).get(left));
      innerFunction(tree.get(node).get(right));
    }
  }

  innerFunction('A');

  return result;
}

function inOrderSearch(tree) {
  let result = '';

  const innerFunction = (node) => {
    if (node !== '.') {
      innerFunction(tree.get(node).get(left));
      result += node;
      innerFunction(tree.get(node).get(right));
    }
  }

  innerFunction('A');

  return result;
}

function postOrderSearch(tree) {
  let result = '';

  const innerFunction = (node) => {
    if (node !== '.') {
      innerFunction(tree.get(node).get(left));
      innerFunction(tree.get(node).get(right));
      result += node;
    }
  }

  innerFunction('A');

  return result;
}

function solution(input) {
  let answer = [];

  const [n, relations] = [parseInt(input[0]), input.slice(1)];

  const tree = new Map();

  for (let relation of relations) {
    let data = relation.split(' ');
    let node = data[0];

    tree.set(node, new Map());

    tree.get(node).set(left, data[1]);
    tree.get(node).set(right, data[2]);
  }

  answer.push(preOrderSearch(tree));
  answer.push(inOrderSearch(tree));
  answer.push(postOrderSearch(tree));

  return answer.join('\n');
}

console.log(solution(input));
