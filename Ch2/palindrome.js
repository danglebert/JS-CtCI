class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const nodeToPush = new Node(val);
    if (!this.head) {
      this.head = this.tail = nodeToPush;
    } else {
      this.tail.next = nodeToPush;
      this.tail = nodeToPush;
    }
    this.length++;
    return this;
  }

  isPalidrome() {
    const vals = [];

    let currNode = this.head;
    while (currNode) {
      vals.push(currNode.val);
      currNode = currNode.next;
    }

    for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
      if (vals[i] !== vals[j]) return false;
    }

    return true;
  }
}
