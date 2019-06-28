class Node {
  constructor(val, next = null, nextMin = null) {
    this.val = val;
    this.next = next;
    this.nextMin = nextMin;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.min = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val, null, this.min);

    if (!this.size) this.first = this.last = this.min = newNode;
    else {
      newNode.next = this.first;
      this.first = newNode;
      if (newNode.val < this.min.val) this.min = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.size) return null;
    if (this.size === 1) this.first = this.last = this.min = null;
    else {
      var poppedNode = this.first;
      this.first = poppedNode.next;
      if (poppedNode === this.min) {
        this.min = poppedNode.nextMin;
      }
    }
    this.size--;
    return poppedNode;
  }

  minimum() {
    return this.min;
  }
}
