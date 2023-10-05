class ArrayList {
    #capacity;
    #size = 0;
    #data = {};

    constructor(capacity) {
        this.#capacity = capacity;
        for (let i = 0; i < this.#capacity; i++) {
            this.#data[i] = undefined;
        }
    }

    get capacity() {
        return this.#capacity;
    }

    get size() {
        return this.#size;
    }

    get empty() {
        return this.#size == 0;
    }

    get full() {
        return this.#size == this.#capacity;
    }

    get values() {
        return { ...this.#data };
    }

    #isValidIndex = (index) => {
        return 0 <= index && index < this.#size;
    }

    insert(at, val) {
        if (at < 0 || at > this.#size) throw Error("Invalid Index");
        if (this.full) throw Error("List is full.")

        if (this.empty) {
            this.#data[0] = val;
            this.#size = 1;
            return;
        }

        for (let i = this.#size; i > at; i--) {
            this.#data[i] = this.#data[i - 1];
        }

        this.#data[at] = val;
        this.#size += 1;
    }

    read(at) {
        if (!this.#isValidIndex(at)) throw Error("Invalid Index");
        return this.#data[at];
    }

    update(at, val) {
        if (!this.#isValidIndex(at)) throw Error("Invalid Index");
        this.#data[at] = val;
    }

    delete(at) {
        if (!this.#isValidIndex(at)) throw Error("Invalid Index");
        for (let i = at; i < this.#size; i++) {
            this.#data[i] = this.#data[i + 1];
        }
        this.#size -= 1;
    }

    find(condition) {
        for (let i = 0; i < this.#size; i++) {
            const element = this.#data[i];
            if (condition(element)) return { "index": i, "value": element };
        }
        return -1;
    }
}

const list = new ArrayList(10);

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
