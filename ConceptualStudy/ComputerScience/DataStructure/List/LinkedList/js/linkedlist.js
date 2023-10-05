class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.prevNode = undefined;
        this.nextNode = undefined;
    }
}

const Tail = Symbol('tail');

class LinkedList {
    #head;
    #tail;

    constructor() {
        this.#head = new LinkedListNode(0);
        this.#tail = new LinkedListNode(Tail);

        this.#head.nextNode = this.#tail;
        this.#tail.prevNode = this.#head;
    }

    get size() {
        return this.#head.value;
    }

    get empty() {
        return this.size === 0;
    }

    get values() {
        let result = {};
        let node = this.#head;
        for (let i = 0; i < this.size; i++) {
            node = node.nextNode;
            result[i] = node.value;
        }
        return result;
    }

    #isValidIndex = (index) => {
        return 0 <= index && index < this.size;
    }

    insert(at, val) {
        if (at < 0 || at > this.size) throw Error("Invalid Index");

        const node = new LinkedListNode(val);

        if (this.empty) {
            node.prevNode = this.#head;
            node.nextNode = this.#tail;

            this.#head.nextNode = node;
            this.#tail.prevNode = node;


            this.#head.value += 1;
            return;
        }

        let tempNode = this.#head;
        for (let i = 0; i <= at; i++) {
            tempNode = tempNode.nextNode;
        }

        const prevNode = tempNode.prevNode;

        node.prevNode = prevNode;
        node.nextNode = tempNode;

        prevNode.nextNode = node;
        tempNode.prevNode = node;

        this.#head.value += 1;
    }

    read(at) {
        if (!this.#isValidIndex(at)) throw Error("Invalid Index");

        let node = this.#head;
        for (let i = 0; i < at; i++) {
            node = node.nextNode;
        }

        return node.value;
    }

    update(at, val) {
        if (!this.#isValidIndex(at)) throw Error("Invalid Index");

        let node = this.#head;
        for (let i = 0; i <= at; i++) {
            node = node.nextNode;
        }

        node.value = val;
    }

    delete(at) {
        if (!this.#isValidIndex(at)) throw Error("Invalid Index");

        let node = this.#head;

        for (let i = 0; i <= at; i++) {
            node = node.nextNode;
        }

        const prevNode = node.prevNode;
        const nextNode = node.nextNode;
        prevNode.nextNode = nextNode;
        nextNode.prevNode = prevNode;

        this.#head.value -= 1;
    }

    find(condition) {
        let node = this.#head.nextNode;
        let idx = 0;

        while (idx < this.size) {
            if (condition(node.value)) return { "index": idx, "value": node.value };
            node = node.nextNode;
            idx += 1;
        }

        return -1;
    }
}

const list = new LinkedList();

const test = (testName = '', fn) => {
    try {
        console.log(`>> ${testName} ${'-'.repeat(30)}`)
        fn();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('List Size: ', list.size);
        console.log('List Values: ', list.values);
    }
}


test('insert 0, index: 0', () => {
    list.insert(0, 0);
});

test('read, index: 1', () => {
    console.log(list.read(1));
});

test('insert 1, index: 1', () => {
    list.insert(1, 1);
});

test('read, index: 1', () => {
    console.log(list.read(1));
});

test('update 11, index: 1', () => {
    list.update(1, 11);
});

test('insert 2~9, index: 2~9', () => {
    for (let i = 2; i <= 9; i++) list.insert(i, i);
});

test('insert 4, index: 1', () => {
    list.insert(1, 4);
});

test('delete, index: 1', () => {
    list.delete(1);
});

test('insert 2, index: 3', () => {
    list.insert(3, 2);
});

test('update 14, index: 4', () => {
    list.update(4, 14);
});

test('find 14', () => {
    console.log(list.find((v) => v === 14));
});