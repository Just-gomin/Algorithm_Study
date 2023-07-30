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

function main() {
  let heap = new MaxHeap();

  for (let i = 0; i < 10; i++) {
    heap.insert(i);
    console.log(heap.data);
  }

  for (let i = 0; i < 9; i++) {
    heap.delete();
    console.log(heap.data);
  }
}
main();
