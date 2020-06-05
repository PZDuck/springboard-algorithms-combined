/** Node: node for a doublt linked list. */

class Node {
    constructor({val, prev=null, next=null}) {
      this.val = val
      this.next = next
      this.prev = prev
    }
  }

  class DoublyLinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    
      for (let val of vals) this.push(val);
    }

    push(val) {
        if (this.length === 0) {
            this.head = new Node(val)
            this.tail = this.head
            this.length++
            return
        }

        this.tail = new Node({val: val, prev: this.tail})
        this.tail = this.tail.next
        this.length++
    }

    unshift(val) {
        if (this.length === 0) {
            this.head = new Node(val)
            this.tail = this.head
            this.length++
            return
        }

        let temp = new Node({val: val, next: this.head})
        this.head = temp
        this.length++
    }

    pop() {
        let curr = this.tail

        if (this.length === 0) {
            return new Error("Empty List")
        } else if (this.length === 1) {
            this.head = null
            this.tail = this.head
            this.length--
            return curr.val
        }

        this.tail = this.tail.prev
        this.tail.next = null
        this.length--
        return curr.val
    }

    shift() {
        let curr = this.head

        if (this.length === 0) {
            return new Error("Empty List")
        } else if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length--
            return curr.val
        }

        this.head = this.head.next
        this.head.prev = null
        this.length++
        return curr.val
    }

    getAt(idx) {
      let curr = this.head
      while (idx) {
        curr = curr.next
        idx--
      }
    
      if (!curr) throw new Error("Invalid Index")
    
      return curr.val
    }
    
    setAt(idx, val) {
      let curr = this.head
      while (idx) {
        curr = curr.next
        idx--
      }
      if (!curr) throw new Error("Invalid Index")
    
      curr.val = val
    }
    
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
      
      prev.next = new Node({val: val, next: curr})
      this.length++
    }
    
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
    
  }
