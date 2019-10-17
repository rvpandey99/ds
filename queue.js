//implementing queue with enque, dequeue, size, front, isEmpty
function Queue (){
    this.collection =[];
    this.enqueue = function (value){
        this.collection.push(value);
    }
    this.dequeue = function (){
        this.collection.shift();
    }
    this.size = function () {
        return this.collection.length;
    }
    this.front = function (){
        return this.collection[0];
    }
    this.isEmpty = function (){
        if (this.collection.length === 0){
            return true;
        }else {
            return false;
        }
    }
    this.print=function () {
        console.log(this.collection);
    }
}

module.exports = Queue;