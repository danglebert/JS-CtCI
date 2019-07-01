console.log('________________________');
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

  pop() {
    if (!this.size) return null;
    if (this.size === 1) this.first = this.last = null;
    else {
      var poppedNode = this.first;
      this.first = this.first.next;
    }
    this.size--;
    return poppedNode;
  }
}

class SetOfStacks {
  constructor() {
    this.size = 1;
    this.stack0 = new Stack();
    this.priority = this.stack0;
  }

  push(val) {
    const newNode = new Node(val);
    // Need to find a way to change prio if the size exists?

    if (this.priority.size > 9) {
      if (this[`stack${this.size - 1}`].size < 10) {
        this.priority = this[`stack${this.size - 1}`];
      } else {
        this[`stack${this.size}`] = new Stack();
        this.priority = this[`stack${this.size}`];
        this.size++;
      }
    }

    this.priority.push(newNode);
  }

  pop() {
    const popNode = this.priority.pop();
    if (!this.priority.size) {
      this.size--;
      delete this[`stack${this.size}`];
      this.priority = this[`stack${this.size - 1}`];
    }
    return popNode;
  }

  popAt(stackNum) {
    const poppedNode = this[`stack${stackNum}`].pop();

    if (this[`stack${stackNum}`].size) {
      this.priority = this[`stack${stackNum}`];
    } else {
      this.size--;
      delete this[`stack${this.size}`];
      this.priority = this[`stack${this.size - 1}`];
    }

    return poppedNode;
  }
}

stackSet = new SetOfStacks();
stackSet.push(1);
stackSet.push(2);
stackSet.push(3);
stackSet.push(4);
stackSet.push(5);
stackSet.push(6);
stackSet.push(7);
stackSet.push(8);
stackSet.push(9);
stackSet.push(10);
stackSet.push(11);
stackSet.popAt(0);
// stackSet.pop();
// stackSet.push(12);
// stackSet.push(13);

console.log(stackSet);
