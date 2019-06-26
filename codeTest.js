console.log('________________________');

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

  merge(l1, l2) {
    if (l2.length) {
      l1.tail.next = l2.head;
      l1.tail = l2.tail;
    }
  }

  partition(val) {
    const lesserList = new SinglyLinkedList();
    const greaterList = new SinglyLinkedList();
    const valList = new SinglyLinkedList();

    let currNode = this.head;

    while (currNode) {
      if (currNode.val === val) valList.push(currNode.val);
      else if (currNode.val < val) lesserList.push(currNode.val);
      else greaterList.push(currNode.val);
      currNode = currNode.next;
    }
    this.merge(lesserList, valList);
    this.merge(lesserList, greaterList);
    this.head = lesserList.head;
    this.tail = lesserList.tail;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
