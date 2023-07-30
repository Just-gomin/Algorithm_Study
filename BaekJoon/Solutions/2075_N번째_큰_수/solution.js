/*
  - 문제 Link : https://www.acmicpc.net/problem/2075
*/

const fs = require("fs");
const { exit } = require("process");
const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";
const [nStr, ...inputs] = fs.readFileSync(filePath).toString().split("\n");

class MinHeap {
  constructor() {
    this.data = [null];
  }

  // 힙의 크기 반환
  size() {
    return this.data.length - 1;
  }

  // 최소 값 출력
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

    let smallestIdx = index;

    if (
      leftChildIdx <= this.size() &&
      this.data[smallestIdx] > this.data[leftChildIdx]
    ) {
      smallestIdx = leftChildIdx;
    }

    if (
      rightChildIdx <= this.size() &&
      this.data[smallestIdx] > this.data[rightChildIdx]
    ) {
      smallestIdx = rightChildIdx;
    }

    if (index != smallestIdx) {
      this.swap(index, smallestIdx);
      return smallestIdx;
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

  // 최소 값을 삭제하고 heapify 진행
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

let n = parseInt(nStr);

let answer = 0;

let heap = new MinHeap();

for (let i = 0; i < n; i++) {
  let nums = inputs[i].split(" ");

  nums.map((v) => {
    heap.insert(parseInt(v));

    if (heap.size() > n) heap.delete();
  });
}

answer = heap.delete();

console.log(answer);
