/*
  - 문제 Link : https://www.acmicpc.net/problem/18258
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

const input = fs.readFileSync(filePath).toString().split("\n");

const queue = {
  data: [],
  push: function (val) {
    this.data.push(val);
    return;
  },
  pop: function () {
    if (this.size() === 0) {
      return "-1";
    }
    return this.data.shift();
  },
  size: function () {
    return this.data.length;
  },
  empty: function () {
    if (this.size() === 0) {
      return "1";
    }
    return "0";
  },
  front: function () {
    if (this.size() === 0) {
      return "-1";
    }
    return this.data[0];
  },
  back: function () {
    if (this.size() === 0) {
      return "-1";
    }
    return this.data[this.size() - 1];
  },
};

function solution(data) {
  const [cmd, val] = data.split(" ");

  switch (cmd) {
    case "push":
      return queue.push(val);
    case "pop":
      return queue.pop();
    case "size":
      return queue.size();
    case "empty":
      return queue.empty();
    case "front":
      return queue.front();
    case "back":
      return queue.back();
  }
}

function main(input) {
  const [n, ...data] = input;

  let answer = [];

  for (let i = 0; i < n; i++) {
    let result = solution(data[i]);
    if (result != undefined) {
      answer.push(result);
    }
  }
  console.log(answer.join("\n"));
}

main(input);
