class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val)
      if(!this.top) {
         this.top = newNode;
      } else { // 45 -> 34 -> 23, 67
        let temp = this.top;
        this.top = newNode;
        this.top.next = temp;
      }
      return ++this.size;
    }

    pop() {
        if(!this.top) return null;
        let temp = this.top;
        if(this.size === 1) {
            this.top = null;
        } else { // 45 -> 34 -> 23 -> 67
           this.top = temp.next;
           temp.next = null;
        }
        this.size--;
        return temp.val;
    }

    peek() {
        if(!this.top) return null;
        return this.top.val;
    }

    isEmpty() {
        return this.size == 0;
    }
}

let stack = new Stack();
stack.push(40);
stack.push(50);
console.log(stack.push(60)); // Output: 3
console.log(stack.pop());    // Output: 60
console.log(stack.peek());   // Output: 50
console.log(stack.isEmpty()); // Output: false
console.log(stack);
