// ------------------------------
// Input with File System
// ------------------------------

// // Read Inputs (from. https://help.acmicpc.net/language/info [node.js & TypeScript])
// const fs = require("fs");
// const { exit } = require("process");

// // 입력값 파일 경로 결정
// // node 실행 시 환경변수 [RUNNING_ON]을 "local"라는 값을 부여하여 '백준 온라인' 과 '로컬' 환경 구분
// const filePath = process.env.RUNNING_ON === "local" ? "./stdin" : "/dev/stdin";

// // 입력 값
// const input = fs.readFileSync(filePath).toString().split("\n");

// ------------------------------
// Input with Read Line
// ------------------------------

// Read Inputs (from. https://velog.io/@leenzy/readline-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
const readline = require("redaline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  /*입력받는 값을 처리하는 코드*/
  rl.close();
});

rl.on("close", () => {
  /*입력이 끝나고 실행할 코드*/
  process.exit();
});

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
