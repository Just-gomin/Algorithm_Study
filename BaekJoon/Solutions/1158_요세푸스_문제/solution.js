/*
  - 문제 Link : https://www.acmicpc.net/problem/1158
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

    if (this.size > 2) {
      this.head = this.head.next;
    } else if (this.size == 2) {
      this.head = this.tail;
    } else {
      this.head = null;
      this.tail = null;
    }

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

function solution(n, k) {
  let queue = new Queue();

  let answer = [];

  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  while (answer.length < n) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.front());
      queue.pop();
    }
    answer.push(queue.front());
    queue.pop();
  }

  return answer;
}

function main(input) {
  const [n, k] = input[0].split(" ");

  let answer = [];

  answer = solution(parseInt(n), parseInt(k));
  let answerStr = answer.join(", ");
  console.log(`<${answerStr}>`);
}

main(input);
