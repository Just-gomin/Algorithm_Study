/*
  - 문제 Link : https://www.acmicpc.net/problem/10870
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

    const n = Number(input[0]);

    let fiboBasket = [0, 1];

    const fiboNum = (n) => fiboBasket[n - 1] + fiboBasket[n - 2];

    while (fiboBasket.length < n + 1) {
        fiboBasket.push(fiboNum(fiboBasket.length));
    }

    answer = fiboBasket[n];

    return answer;
}

console.log(solution(input));
