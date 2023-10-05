// --------------------
// JavaScript Custom Array: Array2
// --------------------

console.log("--------------------")
console.log("JavaScript Custom Array: Array2")
console.log("--------------------")

class Array2 {
    #capacity;
    #size;
    #data;

    /**
     * 
     * @param {number} capacity 배열의 크기
     */
    constructor(capacity) {
        this.#capacity = capacity;
        this.#size = 0;
        this.#data = {};

        for (let i = 0; i < capacity; i++) {
            this.#data[i] = undefined;
        }
    }

    /**
     * Get array's capacity.
     */
    get capacity() { return this.#capacity; }

    /**
     * Get numbers of data in array.
     */
    get size() {
        return this.#size;
    }

    /**
     * Return copied data.
     */
    get values() {
        return { ...this.#data };
    }

    /**
     * 
     * @returns Result of verifying that the array is empty.
     */
    empty() {
        return this.#size === 0;
    }

    /**
     * 
     * @param {number} at Index
     * @returns Result of verifying that the given index is valid.
     */
    #validIndex = (at) => {
        return 0 <= at && at < this.#capacity;
    }

    /**
     * 
     * @param {number} at Index where you want to insert value in array.
     * @param {any} val Data which you want to insert in array.
     */
    insert(at, val) {
        if (!this.#validIndex(at)) throw Error("Invalid Index.");

        if (this.#size === this.#capacity) {
            console.log('The Array is full. Delete Data first, and retry.');
            return;
        }

        let cnt = 0;
        for (let i = this.#capacity - 1; i >= 0; i--) {
            if (i > at) this.#data[i] = this.#data[i - 1];
            if (i === at) this.#data[at] = val;
            if (this.#data[i]) cnt += 1;
        }

        this.#size = cnt;
    }

    /**
     * 
     * @param {number} at Index where you want to delete data.
     */
    delete(at) {
        if (!this.#validIndex(at)) throw Error("Invalid Index.");

        if (this.#size === 0) {
            console.log('The Array is Empty. Insert Data first, and retry.');
            return;
        }

        if (!this.#data[at]) {
            console.log(`There is no data at ${at}.`);
            return;
        }

        delete this.#data[at];
        this.#size -= 1;
    }

    /**
     * 
     * @param {number} at Index where you want to get data.
     */
    access(at) {
        if (!this.#validIndex(at)) throw Error("Invalid Index.");

        return this.#data[at];
    }

    /**
     * 
     * @param {number} at Index where you want to update data.
     * @param {any} val  Data which you want to chage.
     */
    update(at, val) {
        if (!this.#validIndex(at)) throw Error("Invalid Index.");

        if (!this.#data[at]) this.#size += 1;
        this.#data[at] = val;
    }

    /**
     * 
     * @param {Function} condition Condition Function to find data which return true.
     * @returns If there is a data which meet the condition, then will return object that contains the first of data's index and value.
     * If there is no data which meet the condition, then will return -1;
     */
    find(condition) {
        for (let i = 0; i < this.capacity; i++) {
            const element = this.#data[i];
            if (condition(element)) return { 'index': i, 'value': element };
        }
        return -1;
    }
}

const array2 = new Array2(10);
array2.insert(0, 1);
array2.insert(5, 2);
array2.insert(9, 3);
console.log("Size ", array2.size);
console.log("values", array2.values);

try {
    array2.insert(10, 1); // throw Error
} catch (error) {
    console.log(error);
}

array2.update(4, 4);
console.log("Size ", array2.size);
console.log("values", array2.values);

array2.delete(8);
array2.delete(5);
console.log("Size ", array2.size);
console.log("values ", array2.values);
console.log("find ", array2.find((v) => v === 5));
console.log("find ", array2.find((v) => v === 3));