//implementing stack data structure with push, pop, peek, size.
function Stack(){
    this.count = 0;
    this.storage = {};

    this.push = function push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.size = function size() {
        return this.count;
    }

    this.pop = function pop() {
        this.count--;
        const temp = this.storage[this.count];
        delete this.storage[this.count];
        return temp;
    }

    this.peek = function peek() {
        return this.storage[this.count - 1];
    }
}

module.exports = Stack;