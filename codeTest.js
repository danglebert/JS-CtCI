console.log('________________________');

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

  removeDups() {
    let prevNode = this.head;
    let currNode = prevNode.next;
    const visited = new Set([prevNode.val]);

    while (currNode) {
      if (!visited.has(currNode.val)) visited.add(currNode.val);
      else {
        prevNode.next = currNode.next;
        this.length--;
      }

      prevNode = currNode;
      currNode = currNode.next;
    }
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
