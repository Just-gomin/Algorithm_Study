/*
  - 문제 Link : 
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

    const numbers = input[1].split(' ').map((v) => +v);

    const isPrime = (num) => {
        if (num === 1) return 0;

        let divider = 2;
        const limit = Math.sqrt(num);

        while (divider <= limit) {
            if (num % divider === 0) {
                return 0;
            }

            divider++;
        }

        return 1;
    }

    for (let num of numbers) {
        answer += isPrime(num);
    }

    return answer;
}

console.log(solution(input));
