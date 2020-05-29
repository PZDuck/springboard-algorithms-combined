/** Node: node for a singly linked list. */

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (!this.head && !this.tail) {
      this.head = new Node(val)
      this.tail = this.head
    } else {
      this.tail.next = new Node(val)
      this.tail = this.tail.next
    }

    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let temp = this.head
    this.head = new Node(val, temp)

    if (!this.tail) {
      this.tail = this.head
    }

    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    let curr = this.head

    if (!this.head) {
      throw new Error("Empty List")
    } else if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return curr.val
    }

    while (curr.next !== this.tail) {
      curr = curr.next
    }

    this.tail = curr
    this.length--

    return curr.next.val
  }

  /** shift(): return & remove first item. */

  shift() {
    let curr = this.head
    if (!this.head) {
      throw new Error("Empty List")
    } else if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return curr.val
    }

    this.head = curr.next
    this.length--

    return curr.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let curr = this.head
    while (idx) {
      curr = curr.next
      idx--
    }
    if (!curr) throw new Error("Invalid Index")
    return curr.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let curr = this.head
    while (idx) {
      curr = curr.next
      idx--
    }
    if (!curr) throw new Error("Invalid Index")

    curr.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let curr = this.head
    let prev = null

    if (!curr && idx !== 0) throw new Error("Invalid Index")

    if (idx === 0) {
      this.head = new Node(val)
      this.tail = this.head
      this.length++
      return
    } else if (idx === this.length) {
      console.log("Please use .push() method next time.")
      this.tail.next = new Node(val)
      this.tail = this.tail.next
      this.length++
      return
    }

    while (idx) {
      prev = curr
      curr = curr.next
      idx--
    }
    if (!curr) throw new Error("Invalid Index")
    
    prev.next = new Node(val, curr)
    this.length++
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let curr = this.head
    let prev = null

    if (!curr) throw new Error("Empty List")

    if (this.length === 1 && idx === 0) {
      this.head = null
      this.tail = null
      this.length--
      return curr.val
    } 

    while (idx) {
      prev = curr
      curr = curr.next
      idx--
    }
    if (!curr) throw new Error("Invalid Index")
    
    prev.next = curr.next
    this.length--

    return curr.val
  }

  /** average(): return an average of all values in the list */

  average() {
    let curr = this.head
    let total = 0, count = 0

    if (!curr) {
      return 0
    }
    
    while (curr) {
      total += curr.val
      count += 1
      curr = curr.next
    }

    return total / count
  }

  /** reverse(): reverse the linked list in place */
  reverse() {
    let prev = null
    let curr = this.head

    while (curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }
}


/** Sort Sorted Linked Lists
    
    Write a function that is passed two linked lists, a and b, both of which are already sorted.
    It should return a new linked list, in sorted order.
 
*/

function sortLists(a, b) {
    let pointerA = a.head
    let pointerB = b.head
    let sorted = new LinkedList()
    sorted.push(new Node(val=(pointerA.val < pointerB.val ? pointerA : pointerB)))

    while (pointerA || pointerB) {
      if (pointerA <= pointerB) {
        sorted.push(pointerA.val)
        pointerA = pointerA.next
      } else {
        sorted.push(pointerB.val)
        pointerB = pointerB.next
      }
    }

    if (!pointerA) {
      while (pointerB) {
        sorted.push(pointerB.val)
        pointerB = pointerB.next
      }
    } else if (!pointerB) {
      while (pointerA) {
        sorted.push(pointerA)
        pointerA = pointerA.next
      }
    }

    return sorted
}



module.exports = LinkedList;
