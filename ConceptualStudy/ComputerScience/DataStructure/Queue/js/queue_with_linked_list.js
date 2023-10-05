// Single Linked List Based Queue

class QueueNode {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class Queue {
  #header;
  #tail;

  constructor() {
    this.#header = new QueueNode(0);
    this.#tail = new QueueNode(0);

    this.#header.nextNode = this.#tail;
    this.#tail.nextNode = this.#header;
  }

  get size() {
    return this.#header.value;
  }

  get empty() {
    return this.size === 0;
  }

  * values() {
    let node = this.#header;
    let cnt = 0;

    while (cnt++ < this.size) {
      node = node.nextNode;
      yield node.value;
    }

    return;
  }

  enqueue(val) {
    const lastNode = this.#tail.nextNode;
    const newLastNode = new QueueNode(val);

    newLastNode.nextNode = this.#tail;
    lastNode.nextNode = newLastNode;

    this.#tail.nextNode = newLastNode;

    this.#header.value += 1;
  }

  dequeue() {
    if (this.size === 0) return null;

    const node = this.#header.nextNode;

    this.#header.nextNode = node.nextNode;

    this.#header.value -= 1;

    return node.value;
  }

  front() {
    if (this.empty) return null;
    return this.#header.nextNode.value;
  }

  back() {
    if (this.empty) return null;
    return this.#tail.nextNode.value;
  }
}

const queue = new Queue();

const test = (testName = '', fn) => {
  try {
    console.log(`>> ${testName} ${'-'.repeat(30)}`)
    fn();
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Queue Size: ', queue.size);
    console.log(`Queue Values: [ ${[...queue.values()].join(', ')} ]`);
    console.log('\n');
  }
};

test('enqueue 1', () => {
  queue.enqueue(1);
});

test('enqueue 2', () => {
  queue.enqueue(2);
});

test('enqueue 3', () => {
  queue.enqueue(3);
});

test('check front', () => {
  console.log("front: ", queue.front());
});

test('check back', () => {
  console.log("back: ", queue.back());
});

test('dequeue', () => {
  console.log("dequeued: ", queue.dequeue());
});

test('check front', () => {
  console.log("front: ", queue.front());
});

test('check back', () => {
  console.log("back: ", queue.back());
});
