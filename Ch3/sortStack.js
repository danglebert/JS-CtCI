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

  pushNode(node) {
    node.next = null;
    if (!this.size) this.first = this.last = node;
    else {
      node.next = this.first;
      this.first = node;
    }
    return ++this.size;
  }

  pop() {
    if (!this.size) return null;
    let poppedNode = this.first;

    if (this.size === 1) this.first = this.last = null;
    else this.first = this.first.next;

    this.size--;
    return poppedNode;
  }

  peek() {
    return this.first;
  }
}

const sortStack = stack => {
  const tempStack = new Stack();

  // Fill a separate stack
  while (stack.size) {
    tempStack.pushNode(stack.pop());
  }

  // Going to empty out the temp stack
  // Find the max value each time and push that onto the main stack
  while (tempStack.size) {
    let maxNode = new Node(-Infinity);
    let currEval = tempStack.first;

    while (currEval) {
      if (currEval.val > maxNode.val) {
        maxNode = currEval;
      }
      currEval = currEval.next;
    }

    removeNode(tempStack, maxNode);
    stack.pushNode(maxNode);
  }
};

const removeNode = (stack, node) => {
  --stack.size;
  let trail = null;
  let found = false;
  let currNode = stack.first;

  // If there is only one node to remove just go ahead and do it
  if (!currNode.next) {
    stack.first = stack.last = null;
    found = true;
  } else {
    while (!found) {
      if (currNode === node) {
        // If a trail does not yet exist that means the max node is the first node, can directly change stack.first in this case
        trail ? (trail.next = currNode.next) : (stack.first = currNode.next);
        found = true;
      }
      trail = currNode;
      currNode = currNode.next;
    }
  }
};

const stack = new Stack();
stack.push(4);
stack.push(1);
stack.push(2);
stack.push(5);
stack.push(6);
stack.push(3);
sortStack(stack);
