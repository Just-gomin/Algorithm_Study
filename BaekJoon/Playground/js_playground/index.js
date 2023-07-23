// Read Inputs (from. https://help.acmicpc.net/language/info [node.js & TypeScript])
const fs = require("fs");
const { exit } = require("process");

// 입력값 파일 경로 결정
// node 실행 시 환경변수 [RUNNING_ON]을 "local"라는 값을 부여하여 '백준 온라인' 과 '로컬' 환경 구분
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

// 입력 값
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

function solution(n) {
  let queue = new Queue();

  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  let monveLast = false;
  while (queue.size > 1) {
    if (monveLast) {
      queue.push(queue.front());
    }

    queue.pop();
    monveLast = !monveLast;
  }

  return queue.front();
}

function main(input) {
  const n = input[0];

  let answer = 0;

  answer = solution(parseInt(n));

  console.log(`${answer}`);
}

main(input);
