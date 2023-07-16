/*
  - 문제 Link : https://www.acmicpc.net/problem/18258
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs.readFileSync(filePath).toString().split("\n");

class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let newNode = new QNode(value);

    if (!this.head) {
      this.head = newNode;
      this.head.next = this.tail;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.size += 1;
  }

  pop() {
    if (this.size === 0) {
      return -1;
    }

    let value = this.head.value;
    this.head = this.head.next;

    this.size -= 1;

    return value;
  }

  front() {
    if (this.size < 1) {
      return -1;
    }

    return this.head.value;
  }

  back() {
    if (this.size < 1) {
      return -1;
    }

    return this.tail.value;
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }
}

let queue = new Queue();

function solution(data) {
  const [cmd, val] = data.split(" ");

  switch (cmd) {
    case "push":
      queue.push(parseInt(val));
      return;
    case "pop":
      return queue.pop();
    case "size":
      return queue.size;
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
    if (result !== undefined) {
      answer.push(result + "");
    }
  }
  console.log(answer.join("\n"));
}

main(input);
