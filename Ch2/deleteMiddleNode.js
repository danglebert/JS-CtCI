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

  deleteActualMiddleNode() {
    // could do length / 2 if available

    let leadNode = this.head.next;
    let trailNode = this.head;
    let prevNode = null;

    while (leadNode) {
      leadNode.next ? (leadNode = leadNode.next.next) : (leadNode = null);
      prevNode = trailNode;
      trailNode = trailNode.next;
    }

    prevNode.next = trailNode.next;
    this.length--;
  }

  deleteSpecificMiddleNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
    this.length--;
  }
}
