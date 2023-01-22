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
    // Pop out the element from the linked list

    pop() {

        if (!this.head) return undefined;

        let current = this.head;
        let last = current;
        while (current.next) {
            last = current;
            current = current.next;
        }
        this.tail = last;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }



    // Remove element from the start of the list

    shift() {

        let newHead = this.head;
        if (!this.head) {
            return undefined;
        } else {
            this.head = newHead.next;
        }
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    // Add element to the start of the array

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    // Get the node present at the given index;

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        let count = 0;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;

    }




}

const obj = new LinkedList();