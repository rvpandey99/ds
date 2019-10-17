const Stack = require("./stack");
const Queue = require("./queue")
// console.log(stack);
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

const q = new Queue();
q.enqueue(345);
const p = new Queue();
q.enqueue(23);
q.enqueue(345);
console.log(q.front());
console.log(q.size());
q.print();
p.print();
