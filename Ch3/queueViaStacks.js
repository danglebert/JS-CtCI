class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.size) this.first = this.last = newNode;
    else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.size) return null;
    if (this.size === 1) this.first = this.last = null;
    else {
      var poppedNode = this.first;
      this.first = this.first.next;
    }
    this.size--;
    return poppedNode;
  }
}

// Using one stack
// class MyQueue {
//   constructor() {
//     this.queue = new Stack();
//   }

//   push(val) {
//     this.queue.push(new Node(val));
//   }

//   pop() {
//     let currNode = this.queue.first;
//     let trailNode = null;

//     while (currNode.next) {
//       trailNode = currNode;
//       currNode = currNode.next;
//     }

//     trailNode.next = null;
//     this.queue.last = trailNode;
//     this.queue.size--;

//     return currNode;
//   }
// }

// Using 2 stacks
class MyQueue {
  constructor() {
    this.stack = new Stack();
    this.queue = new Stack();
  }

  push(val) {
    this.stack.push(new Node(val));
  }

  shift() {
    if (this.queue.size <= 0) {
      while (this.stack.size > 0) {
        this.queue.push(this.stack.pop());
      }
    }
  }

  pop() {
    this.shift();
    return this.queue.pop();
  }
}
