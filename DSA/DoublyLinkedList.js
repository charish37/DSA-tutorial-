class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let lastEle = this.tail;
            lastEle.next = newNode;
            this.tail = newNode;
            newNode.prev = lastEle;
        }
        this.length++;
        return newNode;
    }

    pop() {
        if (!this.head) return undefined;
        let lastEle = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = lastEle.prev;
            this.tail.next = null;
            lastEle.prev = null;
        }
        this.length--;
        return lastEle;  // return the last element (removed node)
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (index === i) {
                return current;
            }
            current = current.next;
        }
    }

    set(val, index) {
        let current = this.get(index);
        if (current) {
            current.val = val;
            return true;
        }
        return false;
    }

    insert(val, index) {
        if (index < 0 || index >= this.length) return false;
        let node = this.get(index);
        let newNode = new Node(val);
        if (node) {
            if (node.prev) {
                node.prev.next = newNode;
            }
            newNode.prev = node.prev;
            newNode.next = node;
            node.prev = newNode;
            this.length++;
            return true;
        }
        return false;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = current.next;
            this.head.prev = null;
        }
        this.length--;
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let current = this.head;
            newNode.next = current;
            current.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    reverse() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        return this;
    }
}

let list = new DoublyLinkedList();
console.log(list.push(7));
console.log(list.push(4));
console.log(list.push(3));
console.log(list.push(12));
console.log(list.get(1), "--> get");
console.log(list.pop());
list.set(10, 1);
list.insert(15, 1);
console.log(list.get(1));
console.log("---> shift", list.shift());
console.log(list);
console.log(list.reverse());
