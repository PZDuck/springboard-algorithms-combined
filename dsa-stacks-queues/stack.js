/** Node: node for a stack. */

class Node {
  constructor({val=0, next=null, prev=null}) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    if (!this.size) {
      this.first = new Node({val: val})
      this.last = this.first
    } else {
      this.first.next = new Node({val: val, prev: this.first})
      this.first = this.first.next
    }
    this.size++
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.size) throw new Error("Empty Stack")

    let removed = this.first

    if (this.size === 1) {
      this.first = null
      this.last = this.first
    } else {
      this.first = this.first.prev
      this.first.next = null
    }
    this.size--

    return removed.val
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.size ? this.first.val : null
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.size ? true : false
  }
}

module.exports = Stack;
