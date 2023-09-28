/*
  - 문제 Link : 
*/

// ------------------------------
// Input with Read Line
// ------------------------------
/*
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    // input 처리
  });

  rl.on('close', () => {
    // 출력 처리
    process.exit();
  });
*/

// ------------------------------
// Input with File System
// ------------------------------
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
