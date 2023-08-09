/*
  - 문제 Link : https://www.acmicpc.net/problem/9934
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

function solution(input) {
  let [n, record] = [+(input[0]), input[1]];

  let answer = [...Array(n)].map(() => []);
  record = record.split(' ').map((v) => +v);

  const makeTree = (lv, inorderRecord) => {
    if (inorderRecord.length < 1) {
      return;
    } else if (inorderRecord.length === 1) {
      answer[lv].push(inorderRecord[0]);
    } else {
      let rootIdx = Math.floor(inorderRecord.length / 2);
      answer[lv].push(inorderRecord[rootIdx]);
      makeTree(lv + 1, inorderRecord.slice(0, rootIdx));
      makeTree(lv + 1, inorderRecord.slice(rootIdx + 1));
    }
  }

  makeTree(0, record);

  return answer.map((v) => v.join(' ')).join('\n');
}

console.log(solution(input));
