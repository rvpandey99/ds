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

const s = new Stack();

const word = "racecar";
let reverseWord = "";

for(i=0; i<word.length;i++){
    s.push(word[i]);
}

for(i=0; i<word.length;i++){
    reverseWord += s.pop();
}

if (word === reverseWord){
    console.log(`${word} is a pallindrome.`);
} else {
    console.log(`${word} is not a pallindrome.`);
}