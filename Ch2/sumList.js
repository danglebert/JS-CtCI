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

// A very easy way to solve both sums would be to go thru each list separately and convert the values to a number, then add them normally

const reverseOrderSumList = (l1, l2) => {
  let l1Node = l1.head;
  let l2Node = l2.head;
  let carry = 0;
  let sum = '';

  while (l1Node && l2Node) {
    let currSum = l1Node.val + l2Node.val + carry;
    if (currSum > 9) {
      currSum = currSum % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    sum = currSum + sum;
    l1Node = l1Node.next;
    l2Node = l2Node.next;
  }

  if (l1Node) {
    while (l1Node) {
      const currSum = l1Node.val + carry;
      sum = currSum + sum;
      carry = 0;
      l1Node = l1Node.next;
    }
  }
  if (l2Node) {
    while (l2Node) {
      const currSum = l2Node.val + carry;
      sum = currSum + sum;
      carry = 0;
      l2Node = l2Node.next;
    }
  }
  return Number(sum);
};

const inOrderSumList = (l1, l2) => {
  const l1Stack = [];
  const l2Stack = [];

  let currl1 = l1.head;
  while (currl1) {
    l1Stack.unshift(currl1.val);
    currl1 = currl1.next;
  }

  let currl2 = l2.head;
  while (currl2) {
    l2Stack.unshift(currl2.val);
    currl2 = currl2.next;
  }

  let carry = 0;
  let sum = '';

  while (l1Stack.length && l2Stack.length) {
    let currSum = l1Stack.pop() + l2Stack.pop() + carry;
    if (currSum > 9) {
      currSum = currSum % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    sum = currSum + sum;
  }

  if (l1Stack.length) {
    while (l1Stack.length) {
      const currSum = l1Stack.pop() + carry;
      sum = currSum + sum;
      carry = 0;
    }
  }
  if (l2Stack.length) {
    while (l2Stack.length) {
      const currSum = l2Stack.pop() + carry;
      sum = currSum + sum;
      carry = 0;
    }
  }
  return Number(sum);
};
