class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
          this.head = newNode;
          this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    pop() {
        if(!this.head) return undefined;
        if(this.length === 1) {
            let current = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        }
        let current = this.head; 
        let nextTail = current;
        while(current.next) {
            nextTail = current;
            current = current.next;
        }
        nextTail.next = null;
        this.tail = nextTail;
        this.length--;
        return current;
    }

    get(index) {
        if(index <0 || index >= this.length) return undefined;
        let current = this.head;
        for(let i= 0; i<this.length; i++){
            if(index === i){
                return current
            } else {
                current = current.next; // to get current node
            }
        }
    }

    set(val,index) {
        let node = this.get(index);
        if(node){
            node.val = val;
        } else {
            return false
        }
    }

    shift(){
      if(!this.head) return undefined;
      let current = this.head;
        this.head = current.next;
        current.next = null;
        this.length--
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let current = this.head;
            this.head = newNode;
            newNode.next = current;
        }
        this.length++;
        return newNode;
    }

    insert(val,index) {
        if(index<0 || index > this.length) return undefined;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val)
        let node = this.get(index-1);
        let newNode = new Node(val);
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i< this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node; 
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.pop();
list.push(4);
list.push(7);
list.shift();
list.unshift(2);
list.insert(6,1);
list.set(9,1);
list.get(1);
list.reverse();

console.log(list);
// 2 -> 9 -> 7  
