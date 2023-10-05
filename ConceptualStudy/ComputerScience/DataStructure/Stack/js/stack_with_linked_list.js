class StackNode {
    constructor(value) {
        this.value = value;
        this.nextNode = undefined;
    }
}

class Stack {
    #header;

    constructor() {
        this.#header = new StackNode(0);
    }

    get size() {
        return this.#header.value;
    }

    get empty() {
        return this.size === 0;
    }

    * values() {
        let node = this.#header;

        while (node.nextNode) {
            node = node.nextNode;
            yield node.value;
        }

        return;
    }

    push(val) {
        const newNode = new StackNode(val);
        newNode.nextNode = this.#header.nextNode;
        this.#header.nextNode = newNode;
        this.#header.value += 1;
    }

    pop() {
        if (this.empty) return;

        const top = this.#header.nextNode;

        this.#header.nextNode = top.nextNode;
        this.#header.value -= 1;

        return top.value;
    }
}

const stack = new Stack();

const test = (testName = '', fn) => {
    try {
        console.log(`>> ${testName} ${'-'.repeat(30)}`)
        fn();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Stack Size: ', stack.size);
        console.log(`Stack Values: [ ${[...stack.values()].join(', ')} ]`);
        console.log('\n');
    }
}

test('check size', () => { });

test('push 1', () => {
    stack.push(1);
});

test('push 2', () => {
    stack.push(2);
});

test('pop', () => {
    console.log(`poped value: ${stack.pop()}`);
});

test('check empty', () => {
    console.log(`Empty: ${stack.empty}`);
});

test('push 10 values', () => {
    for (let i = 1; i <= 10; i++) {
        stack.push(i);
    }
});

test('pop 5 times', () => {
    for (let i = 0; i < 5; i++) {
        console.log(`poped value: ${stack.pop()}`);
    }
});