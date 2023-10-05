class Stack {
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

    * values() {
        for (const element of this.#data) {
            yield element;
        }
        return;
    }

    push(val) {
        this.#data.push(val);
    }

    pop() {
        return this.#data.pop();
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