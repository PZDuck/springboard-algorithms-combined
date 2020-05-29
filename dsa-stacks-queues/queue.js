/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (!this.size) {
      this.first = new Node(val)
      this.last = this.first
    } else {
      this.last.next = new Node(val)
      this.last = this.last.next
    }
    this.size++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.size) throw new Error("Empty Queue")

    let removed = this.first

    if (this.size === 1) {
      this.first = null
      this.last = this.first
    } else {
      this.first = this.first.next
    }
    this.size--

    return removed.val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !this.size ? true : false
  }
}

module.exports = Queue;
