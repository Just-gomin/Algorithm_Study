/*
  - 문제 Link : https://www.acmicpc.net/problem/9012
*/

const fs = require("fs");
const { exit } = require("process");

const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

const input = fs.readFileSync(filePath).toString().split("\n");

function solution(data) {
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

  let answer = [];
  let num = parseInt(n);

  for (let i = 0; i < num; i++) {
    answer.push(solution(data[i]));
  }
  console.log(answer.join("\n"));
}

main(input);
