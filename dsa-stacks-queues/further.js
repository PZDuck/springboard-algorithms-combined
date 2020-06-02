// Browser Back/Forward

/**
    The top item in s1 is a current website

    s1 = [], s2 = []
    if a user visits a website:
        s1.push(website)
    if a user goes back:
        s2.push(s1.pop())
    if a user goes forward:
        s1.push(s2.pop())
 */

 // String Reversal

 let Stack = require('./stack.js')

 function strReverse(str) {
    let stack = new Stack()
    let reversed = ""

    for (let i=str.length-1; i>=0; i--) {
        stack.push(str[i])
        reversed += stack.pop()
    }

    return reversed
}

// Balanced Brackets

function balancedBrackets(str) {
    const brackets = {"(" : ")", "{": "}", "[": "]"}
    let stack = new Stack()

    for (let i=0;i<str.length;i++) {
        if (Object.keys(brackets).includes(str[i])) stack.push(brackets[str[i]])
        else if (str[i] === stack.peek()) stack.pop()
    }

    return stack.isEmpty() ? true : false
}

// Josephus Survivor
class Node {
    constructor(val=0, next=null) {
        this.val = val
        this.next = next
    }
}

function josephus(num, step) {
    let nums = new Node()
    let pointer = nums
    for (let i=1;i<num;i++) {
        nums.val = i
        nums.next = new Node()
        nums = nums.next
    }
    nums.val = num
    nums.next = pointer
    nums = nums.next

    while (pointer !== pointer.next) {
        
        for (let i=1;i<step;i++) {
            pointer = pointer.next
        }
        
        pointer.val = pointer.next.val
        pointer.next = pointer.next.next
    }

    return pointer.val

}
