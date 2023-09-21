/*
  - 문제 Link : https://www.acmicpc.net/problem/2753
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
    const year = Number(input[0]);

    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 1 : 0;
}

console.log(solution(input));
