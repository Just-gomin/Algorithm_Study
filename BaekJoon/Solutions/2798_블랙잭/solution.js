/*
  - 문제 Link : 
*/

const fs = require("fs");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

function solution(input) {
    let answer = "";
    return answer;
}

console.log(solution(input));
