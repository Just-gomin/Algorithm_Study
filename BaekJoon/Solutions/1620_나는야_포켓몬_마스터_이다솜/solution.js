/*
  - 문제 Link : https://www.acmicpc.net/problem/1620
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(n, m, inputs) {
  let answer = [];

  let indexMap = {}; // 숫자 키 : 포켓몬 이름
  let nameMap = {}; // 포켓몬 이름 키 : 숫자

  for (let i = 0; i < n; i++) {
    indexMap[i + 1] = inputs[i];
    nameMap[inputs[i]] = i + 1;
  }

  for (let j = 0; j < m; j++) {
    let question = inputs[n + j];

    // 숫자 문자형인지 확인
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
