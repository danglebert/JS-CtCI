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

  loopDetection() {
    const visited = new Set();

    let currNode = this.head;
    while (currNode) {
      if (visited.has(currNode)) return currNode;
      else visited.add(currNode);
      currNode = currNode.next;
    }
  }
}
