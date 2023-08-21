/*
  - 문제 Link : https://www.acmicpc.net/problem/1343
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
  let answer = "";

  const board = input[0].split(".");
  const aaaa = "AAAA";
  const bb = "BB";

  for (let i = 0; i < board.length; i++) {
    const part = board[i];

    if (i != 0) {
      answer += ".";
    }

    if (part.length % 2 === 0) {
      let countAAAA = Math.floor(part.length / aaaa.length);
      let countBB = Math.floor((part.length % aaaa.length) / bb.length);
      answer += aaaa.repeat(countAAAA);
      answer += bb.repeat(countBB);
    } else {
      return -1;
    }
  }

  return answer;
}

console.log(solution(input));
