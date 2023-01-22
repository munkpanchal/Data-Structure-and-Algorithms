class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Push method of LinkedList

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }


    // Print all the element of LinkedList

    print() {

        let current = this.head;
        const arr = new Array();

        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }


}

const obj = new LinkedList();