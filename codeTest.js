console.log('________________________');

// push, pop, peek (return top) , isempty

class MultiStack {
  constructor() {
    this.stacks = [];
    this.stack1End = 0;
    this.stack2End = 0;
    this.stack3End = 0;
  }

  push(stack, val) {
    if (stack === 1) {
      this.stacks.splice(this.stack1End, 0, val);
      this.stack1End++;
      this.stack2End++;
    } else if (stack === 2) {
      this.stacks.splice(this.stack2End, 0, val);
      this.stack2End++;
    } else if (stack === 3) {
      this.stacks.splice(this.stack3End, 0, val);
    }
    this.stack3End++;
  }

  pop(stack) {
    if (stack === 1) {
      if (this.stack1End > 0) {
        this.stacks.splice(this.stack1End - 1, 1);
        this.stack1End--;
        this.stack2End--;
        this.stack3End--;
      }
    } else if (stack === 2) {
      if (this.stack2End > this.stack1End) {
        this.stacks.splice(this.stack2End - 1, 1);
        this.stack2End--;
        this.stack3End--;
      }
    } else if (stack === 3) {
      if (this.stack3End > this.stack2End) {
        this.stacks.splice(this.stack3End - 1, 1);
        this.stack3End--;
      }
    }
  }

  peek(stack) {
    const end = this[`stack${stack}End`];
    return this.stacks[end - 1];
  }

  isEmpty(stack) {
    if (stack === 1) return this.stack1End === 0;
    return this[`stack${stack}End`] === this[`stack${stack - 1}End`];
  }
}

const myStack = new MultiStack();

myStack.push(1, 'first');
myStack.push(1, 'second');
myStack.push(2, 'uno');
myStack.push(2, 'dos');
myStack.push(3, 'un');
myStack.push(3, 'do');
myStack.pop(1);
myStack.pop(1);

console.log(myStack.isEmpty(1));
