/*
  - 문제 Link : https://www.acmicpc.net/problem/11279
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const input = fs.readFileSync(filePath).toString().split("\n");

class MaxHeap {
  constructor() {
    this.data = [null];
  }

  // 힙의 크기 반환
  size() {
    return this.data.length - 1;
  }

  // 최대 값 출력
  top() {
    if (this.size() < 0) {
      throw Error("Heap is empty.");
    }

    return this.data[1];
  }

  // 부모 노드와 자식 노드의 값 교환
  swap(idx, childIdx) {
    [this.data[idx], this.data[childIdx]] = [
      this.data[childIdx],
      this.data[idx],
    ];
  }

  // Heap의 성질을 유지 시키는 정렬 함수
  heapify(index) {
    let leftChildIdx = index * 2;
    let rightChildIdx = leftChildIdx + 1;

    let biggestIdx = index;

    if (
      leftChildIdx <= this.size() &&
      this.data[biggestIdx] < this.data[leftChildIdx]
    ) {
      biggestIdx = leftChildIdx;
    }

    if (
      rightChildIdx <= this.size() &&
      this.data[biggestIdx] < this.data[rightChildIdx]
    ) {
      biggestIdx = rightChildIdx;
    }

    if (index != biggestIdx) {
      this.swap(index, biggestIdx);
      return biggestIdx;
    }
  }

  // 아래에서 위로 올라가며 heapify 진행
  heapifyUp(index) {
    if (index > this.size())
      throw Error("Given index is bigger than heap size.");

    if (index < 1) return;

    this.heapify(index);
    this.heapifyUp(parseInt(index / 2));
  }

  // 위에서 아래로 내려가며 heapify 진행
  heapifyDown(index) {
    if (index < 1) throw Error("Given index must be bigger than 0.");

    if (index > this.size()) return;

    let nextIdx = this.heapify(index);
    if (nextIdx != index) this.heapifyDown(nextIdx);
  }

  // 값 추가
  insert(value) {
    this.data.push(value);
    this.heapifyUp(this.size());
  }

  // 최대 값을 삭제하고 heapify 진행
  delete() {
    let size = this.size();

    if (size < 1) {
      throw Error("Heap is empty.");
    } else if (size == 1) {
      return this.data.pop();
    } else {
      let result = this.data[1];

      this.swap(1, this.size());

      this.data.pop();

      this.heapifyDown(1);

      return result;
    }
  }
}

function solution(n, inputs = []) {
  let answer = [];

  let heap = new MaxHeap();

  for (let i = 0; i < n; i++) {
    let value = parseInt(inputs[i]);

    if (value == 0) {
      if (heap.size() > 0) {
        answer.push(heap.delete());
      } else {
        answer.push(0);
      }
    } else {
      heap.insert(value);
    }
  }

  return answer;
}

function main(input) {
  let answer = [];

  answer = solution(parseInt(input[0]), input.slice(1));

  console.log(answer.join("\n"));
}

main(input);
