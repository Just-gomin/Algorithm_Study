/*
  - 문제 Link : https://www.acmicpc.net/problem/2745
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
  let answer = 0;

  const [N, B] = [input[0].split(' ')[0], +(input[0].split(' ')[1])];

  const alphabetLength = 'Z'.charCodeAt() - 'A'.charCodeAt();
  let nDecimal = {};

  // 1 ~ 9
  for (let i = 0; i < 10; i++) nDecimal[i + ''] = i;
  // A ~ Z (10 ~ 36)
  for (let i = 0; i <= alphabetLength; i++) nDecimal[String.fromCharCode('A'.charCodeAt() + i)] = 10 + i;

  N.split('').map((v, i) => {
    answer += nDecimal[v] * Math.pow(B, N.length - (i + 1));
  });

  return answer;
}

console.log(solution(input));
