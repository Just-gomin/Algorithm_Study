class Queue {
    #data;

    constructor() {
        this.#data = [];
    }

    get size() {
        return this.#data.length;
    }

    get empty() {
        return this.size === 0;
    }

    *values() {
        for (const element of this.#data) {
            yield element;
        }

        return;
    }

    enqueue(val) {
        this.#data.push(val);
    }

    dequeue(val) {
        return this.#data.shift();
    }

    front() {
        if (this.empty) return null;
        return this.#data[0];
    }

    back() {
        if (this.empty) return null;
        return this.#data[this.size - 1];
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
