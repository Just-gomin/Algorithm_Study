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

  enqueue(value) {
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

  dequeue() {
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
      return null;
    }

    return this.head.value;
  }

  back() {
    if (this.size < 1) {
      return null;
    }

    return this.tail.value;
  }

  empty() {
    return this.size === 0;
  }
}

function main() {
  let q = new Queue();

  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  console.log(q.front());
  console.log(q.back());
  q.enqueue(30);
  q.dequeue();
  q.enqueue(1);
  console.log(q.front());
  console.log(q.back());
  console.log(q.size);
  console.log(q);
}

main();
