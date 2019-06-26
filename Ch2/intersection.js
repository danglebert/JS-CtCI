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
}

const intersection = (l1, l2) => {
  if (l1.tail !== l2.tail) return false;

  const longerList = l1.length > l2.length ? l1 : l2;
  const shorterList = l1.length <= l2.length ? l1 : l2;

  let curr1 = longerList.head;
  let curr2 = shorterList.head;
  for (let i = longerList.length - shorterList.length; i > 0; --i) {
    curr1 = curr1.next;
  }

  while (curr1 !== curr2) {
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return curr1;
};
