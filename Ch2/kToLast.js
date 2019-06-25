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

  kthToLast(n) {
    // with length, can technically just iterate length - n times
    // or compute length, then do the same.
    // this is a bit contrived but mainly for fun / the challenge.

    let leadNode = this.head.next;
    let trailNode = this.head;

    for (let i = n - 1; i > 0; --i) {
      leadNode = leadNode.next;
    }

    while (leadNode) {
      leadNode = leadNode.next;
      trailNode = trailNode.next;
    }

    return trailNode;
  }
}
