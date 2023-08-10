/*
  - 문제 Link : https://www.acmicpc.net/problem/2581
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
    const [m, n] = [+(input[0]), +(input[1])];

    let sum = 0;
    let min = -1;

    const isPrime = (num) => {
        if (num === 1) return false;

        let divider = 2;
        const limit = Math.sqrt(num);

        while (divider <= limit) {
            if (num % divider === 0) return false;
            divider++;
        }

        return true;
    }

    for (let num = m; num <= n; num++) {
        if (isPrime(num)) {
            sum += num;
            if (min === -1) min = num;
        }
    }

    if (sum === 0) return -1;
    else return `${sum}\n${min}`;
}

console.log(solution(input));
