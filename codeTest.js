console.log('________________________');
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

  peek() {
    return this.first;
  }
}

const sortStack = stack => {
  const tempStack = new Stack();
};
