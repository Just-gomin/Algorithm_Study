/*
  - 문제 Link : https://www.acmicpc.net/problem/18258
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

const input = fs.readFileSync(filePath).toString().split("\n");

let queue = [];

function solution(data) {
  const [cmd, val] = data.split(" ");

  switch (cmd) {
    case "push":
      queue.push(val);
      return;
    case "pop":
      if (queue.length === 0) {
        return -1;
      }
      return queue.shift();
    case "size":
      return queue.length;
    case "empty":
      return queue.length === 0 ? 1 : 0;
    case "front":
      if (queue.length === 0) {
        return -1;
      }
      return queue[0];
    case "back":
      if (queue.length === 0) {
        return -1;
      }
      return queue[queue.length - 1];
  }
}

function main(input) {
  const [n, ...data] = input;

  let answer = [];

  for (let i = 0; i < n; i++) {
    let result = solution(data[i]);
    if (result !== undefined) {
      answer.push(result + "");
    }
  }
  console.log(answer.join("\n"));
}

main(input);
